import { createClient } from '@supabase/supabase-js'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { User, StudentProgress, TestAttempt, LessonProgress, Lesson, Question } from '@/types'
import { LESSONS as SEED_LESSONS, QUESTIONS as SEED_QUESTIONS } from './data'

function getDb() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  )
}

// ── Row mappers ────────────────────────────────────────────────────────────

function rowToUser(row: any): User {
  return {
    id: row.id,
    email: row.email,
    name: row.name,
    password: row.password,
    role: row.role,
    studentId: row.student_id ?? undefined,
    group: row.group_name ?? undefined,
    createdAt: row.created_at,
  }
}

function rowToLesson(row: any): Lesson {
  return {
    id: row.id,
    topicNumber: row.topic_number,
    title: row.title,
    slug: row.slug,
    description: row.description ?? '',
    videoUrl: row.video_url ?? '',
    videoDuration: row.video_duration ?? '',
    lectureText: row.lecture_text ?? '',
    order: row.sort_order,
  }
}

function lessonToRow(lesson: Omit<Lesson, 'id'> & { id?: string }) {
  return {
    id: lesson.id ?? uuidv4(),
    topic_number: lesson.topicNumber,
    title: lesson.title,
    slug: lesson.slug,
    description: lesson.description ?? '',
    video_url: lesson.videoUrl ?? '',
    video_duration: lesson.videoDuration ?? '',
    lecture_text: lesson.lectureText ?? '',
    sort_order: lesson.order,
  }
}

function rowToQuestion(row: any): Question {
  return {
    id: row.id,
    lessonId: row.lesson_id,
    topicNumber: row.topic_number,
    text: row.text,
    options: row.options,
    correctIndex: row.correct_index,
    explanation: row.explanation ?? '',
  }
}

function questionToRow(q: Omit<Question, 'id'> & { id?: string }) {
  return {
    id: q.id ?? uuidv4(),
    lesson_id: q.lessonId,
    topic_number: q.topicNumber,
    text: q.text,
    options: q.options,
    correct_index: q.correctIndex,
    explanation: q.explanation ?? '',
  }
}

function rowToLessonProgress(row: any): LessonProgress {
  return {
    lessonId: row.lesson_id,
    topicNumber: row.topic_number ?? 0,
    videoWatched: row.video_watched ?? false,
    lectureRead: row.lecture_read ?? false,
    testPassed: row.test_passed ?? false,
    testScore: row.test_score ?? 0,
    testPercentage: Number(row.test_percentage ?? 0),
    attempts: row.attempts ?? 0,
    completedAt: row.completed_at ?? undefined,
  }
}

function rowToTestAttempt(row: any): TestAttempt {
  return {
    id: row.id,
    userId: row.user_id,
    lessonId: row.lesson_id,
    topicNumber: row.topic_number,
    answers: row.answers,
    score: row.score,
    totalQuestions: row.total_questions,
    percentage: Number(row.percentage),
    passed: row.passed,
    completedAt: row.completed_at,
    timeSpentSeconds: row.time_spent_seconds,
  }
}

function buildStudentProgress(userId: string, courseId: string, rows: any[]): StudentProgress {
  const lessons = rows.map(rowToLessonProgress)
  const completedLessons = lessons.filter((l) => l.testPassed).length
  const totalPct = lessons.reduce((acc, l) => acc + (l.testPercentage ?? 0), 0)
  const overallPercentage = Math.round(totalPct / 15)
  const startedAt = rows.reduce((min, r) => {
    const d = r.started_at || new Date().toISOString()
    return d < min ? d : min
  }, rows[0]?.started_at || new Date().toISOString())
  const lastActivityAt = rows.reduce((max, r) => {
    const d = r.last_activity_at || new Date().toISOString()
    return d > max ? d : max
  }, rows[0]?.last_activity_at || new Date().toISOString())

  return { userId, courseId, lessons, completedLessons, overallPercentage, startedAt, lastActivityAt }
}

// ── Seed (runs once when DB is empty) ─────────────────────────────────────

let _seeded = false

async function ensureSeeded() {
  if (_seeded) return
  const db = getDb()
  const { count } = await db.from('lessons').select('*', { count: 'exact', head: true })
  if ((count ?? 0) > 0) { _seeded = true; return }

  // Seed lessons in batches of 5 (lectureText can be large)
  for (let i = 0; i < SEED_LESSONS.length; i += 5) {
    const batch = SEED_LESSONS.slice(i, i + 5).map((l) => lessonToRow(l))
    await db.from('lessons').upsert(batch, { onConflict: 'id' })
  }

  // Seed questions in batches of 25
  for (let i = 0; i < SEED_QUESTIONS.length; i += 25) {
    const batch = SEED_QUESTIONS.slice(i, i + 25).map((q) => questionToRow(q))
    await db.from('questions').upsert(batch, { onConflict: 'id' })
  }

  // Seed default users (only if none exist)
  const { count: userCount } = await db.from('users').select('*', { count: 'exact', head: true })
  if ((userCount ?? 0) === 0) {
    const adminHash = bcrypt.hashSync('admin123', 10)
    const studentHash = bcrypt.hashSync('student123', 10)
    await db.from('users').upsert([
      {
        id: 'admin-001',
        email: 'admin@sstudy.uz',
        name: 'Admin Foydalanuvchi',
        password: adminHash,
        role: 'admin',
        created_at: new Date().toISOString(),
      },
      {
        id: 'student-001',
        email: 'student@tatu.uz',
        name: 'Demo Talaba',
        password: studentHash,
        role: 'student',
        student_id: 'TATU-2024-001',
        group_name: 'MT-21',
        created_at: new Date().toISOString(),
      },
    ], { onConflict: 'id' })
  }

  _seeded = true
}

// ── Users ──────────────────────────────────────────────────────────────────

export async function getAllUsers(): Promise<User[]> {
  await ensureSeeded()
  const db = getDb()
  const { data } = await db.from('users').select('*').order('created_at')
  return (data ?? []).map(rowToUser)
}

export async function getUserById(id: string): Promise<User | undefined> {
  await ensureSeeded()
  const db = getDb()
  const { data } = await db.from('users').select('*').eq('id', id).maybeSingle()
  return data ? rowToUser(data) : undefined
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  await ensureSeeded()
  const db = getDb()
  const { data } = await db.from('users').select('*').eq('email', email).maybeSingle()
  return data ? rowToUser(data) : undefined
}

export async function createUser(data: {
  email: string
  name: string
  password: string
  studentId?: string
  group?: string
}): Promise<User> {
  await ensureSeeded()
  const db = getDb()
  const { data: existing } = await db.from('users').select('id').eq('email', data.email).maybeSingle()
  if (existing) throw new Error("Bu email allaqachon ro'yxatdan o'tgan")

  const hashed = await bcrypt.hash(data.password, 10)
  const row = {
    id: uuidv4(),
    email: data.email,
    name: data.name,
    password: hashed,
    role: 'student',
    student_id: data.studentId ?? null,
    group_name: data.group ?? null,
    created_at: new Date().toISOString(),
  }
  const { data: result, error } = await db.from('users').insert(row).select().single()
  if (error) throw new Error(error.message)
  return rowToUser(result)
}

export async function updateUser(id: string, updates: Partial<User>): Promise<User | null> {
  const db = getDb()
  const dbUpdates: any = {}
  if (updates.name !== undefined) dbUpdates.name = updates.name
  if (updates.email !== undefined) dbUpdates.email = updates.email
  if (updates.password !== undefined) dbUpdates.password = updates.password
  if (updates.role !== undefined) dbUpdates.role = updates.role
  if (updates.studentId !== undefined) dbUpdates.student_id = updates.studentId
  if (updates.group !== undefined) dbUpdates.group_name = updates.group

  const { data, error } = await db.from('users').update(dbUpdates).eq('id', id).select().single()
  if (error || !data) return null
  return rowToUser(data)
}

export async function deleteUser(id: string): Promise<boolean> {
  const db = getDb()
  const { error } = await db.from('users').delete().eq('id', id)
  return !error
}

// ── Lessons ────────────────────────────────────────────────────────────────

export async function getStoreLessons(): Promise<Lesson[]> {
  await ensureSeeded()
  const db = getDb()
  const { data } = await db.from('lessons').select('*').order('sort_order')
  return (data ?? []).map(rowToLesson)
}

export async function getStoreLessonById(id: string): Promise<Lesson | undefined> {
  await ensureSeeded()
  const db = getDb()
  const { data } = await db.from('lessons').select('*').eq('id', id).maybeSingle()
  return data ? rowToLesson(data) : undefined
}

export async function createLesson(data: Omit<Lesson, 'id'>): Promise<Lesson> {
  const db = getDb()
  const row = lessonToRow(data)
  const { data: result, error } = await db.from('lessons').insert(row).select().single()
  if (error) throw new Error(error.message)
  return rowToLesson(result)
}

export async function updateLesson(id: string, updates: Partial<Lesson>): Promise<Lesson | null> {
  const db = getDb()
  const dbUpdates: any = {}
  if (updates.topicNumber !== undefined) dbUpdates.topic_number = updates.topicNumber
  if (updates.title !== undefined) dbUpdates.title = updates.title
  if (updates.slug !== undefined) dbUpdates.slug = updates.slug
  if (updates.description !== undefined) dbUpdates.description = updates.description
  if (updates.videoUrl !== undefined) dbUpdates.video_url = updates.videoUrl
  if (updates.videoDuration !== undefined) dbUpdates.video_duration = updates.videoDuration
  if (updates.lectureText !== undefined) dbUpdates.lecture_text = updates.lectureText
  if (updates.order !== undefined) dbUpdates.sort_order = updates.order

  const { data, error } = await db.from('lessons').update(dbUpdates).eq('id', id).select().single()
  if (error || !data) return null
  return rowToLesson(data)
}

export async function deleteLesson(id: string): Promise<boolean> {
  const db = getDb()
  await db.from('questions').delete().eq('lesson_id', id)
  const { error } = await db.from('lessons').delete().eq('id', id)
  return !error
}

// ── Questions ──────────────────────────────────────────────────────────────

export async function getStoreQuestions(lessonId?: string): Promise<Question[]> {
  await ensureSeeded()
  const db = getDb()
  let query = db.from('questions').select('*')
  if (lessonId) query = query.eq('lesson_id', lessonId)
  const { data } = await query
  return (data ?? []).map(rowToQuestion)
}

export async function getStoreQuestionById(id: string): Promise<Question | undefined> {
  const db = getDb()
  const { data } = await db.from('questions').select('*').eq('id', id).maybeSingle()
  return data ? rowToQuestion(data) : undefined
}

export async function createQuestion(data: Omit<Question, 'id'>): Promise<Question> {
  const db = getDb()
  const row = questionToRow(data)
  const { data: result, error } = await db.from('questions').insert(row).select().single()
  if (error) throw new Error(error.message)
  return rowToQuestion(result)
}

export async function updateQuestion(id: string, updates: Partial<Question>): Promise<Question | null> {
  const db = getDb()
  const dbUpdates: any = {}
  if (updates.text !== undefined) dbUpdates.text = updates.text
  if (updates.options !== undefined) dbUpdates.options = updates.options
  if (updates.correctIndex !== undefined) dbUpdates.correct_index = updates.correctIndex
  if (updates.explanation !== undefined) dbUpdates.explanation = updates.explanation
  if (updates.topicNumber !== undefined) dbUpdates.topic_number = updates.topicNumber

  const { data, error } = await db.from('questions').update(dbUpdates).eq('id', id).select().single()
  if (error || !data) return null
  return rowToQuestion(data)
}

export async function deleteQuestion(id: string): Promise<boolean> {
  const db = getDb()
  const { error } = await db.from('questions').delete().eq('id', id)
  return !error
}

// ── Progress ───────────────────────────────────────────────────────────────

export async function getProgress(userId: string, courseId: string): Promise<StudentProgress | null> {
  const db = getDb()
  const { data } = await db.from('lesson_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('course_id', courseId)
  if (!data || data.length === 0) return null
  return buildStudentProgress(userId, courseId, data)
}

export async function getAllProgress(): Promise<StudentProgress[]> {
  const db = getDb()
  const { data } = await db.from('lesson_progress').select('*').order('last_activity_at', { ascending: false })
  if (!data || data.length === 0) return []

  const map = new Map<string, any[]>()
  for (const row of data) {
    const key = `${row.user_id}::${row.course_id}`
    if (!map.has(key)) map.set(key, [])
    map.get(key)!.push(row)
  }

  return Array.from(map.entries()).map(([key, rows]) => {
    const [userId, courseId] = key.split('::')
    return buildStudentProgress(userId, courseId, rows)
  })
}

export async function updateLessonProgress(
  userId: string,
  courseId: string,
  lessonUpdate: Partial<LessonProgress> & { lessonId: string; topicNumber: number }
): Promise<StudentProgress> {
  const db = getDb()
  const now = new Date().toISOString()

  const { data: existing } = await db.from('lesson_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('course_id', courseId)
    .eq('lesson_id', lessonUpdate.lessonId)
    .maybeSingle()

  const row = {
    user_id: userId,
    course_id: courseId,
    lesson_id: lessonUpdate.lessonId,
    topic_number: lessonUpdate.topicNumber,
    video_watched: lessonUpdate.videoWatched ?? existing?.video_watched ?? false,
    lecture_read: lessonUpdate.lectureRead ?? existing?.lecture_read ?? false,
    test_passed: lessonUpdate.testPassed ?? existing?.test_passed ?? false,
    test_score: lessonUpdate.testScore ?? existing?.test_score ?? 0,
    test_percentage: lessonUpdate.testPercentage ?? existing?.test_percentage ?? 0,
    attempts: lessonUpdate.attempts ?? existing?.attempts ?? 0,
    completed_at: lessonUpdate.completedAt ?? existing?.completed_at ?? null,
    started_at: existing?.started_at ?? now,
    last_activity_at: now,
  }

  await db.from('lesson_progress').upsert(row, { onConflict: 'user_id,course_id,lesson_id' })
  return (await getProgress(userId, courseId))!
}

// ── Test Attempts ──────────────────────────────────────────────────────────

export async function saveTestAttempt(attempt: Omit<TestAttempt, 'id'>): Promise<TestAttempt> {
  const db = getDb()
  const row = {
    id: uuidv4(),
    user_id: attempt.userId,
    lesson_id: attempt.lessonId,
    topic_number: attempt.topicNumber,
    answers: attempt.answers,
    score: attempt.score,
    total_questions: attempt.totalQuestions,
    percentage: attempt.percentage,
    passed: attempt.passed,
    completed_at: attempt.completedAt,
    time_spent_seconds: attempt.timeSpentSeconds,
  }
  const { data, error } = await db.from('test_attempts').insert(row).select().single()
  if (error) throw new Error(error.message)
  return rowToTestAttempt(data)
}

export async function getTestAttempts(userId: string, lessonId: string): Promise<TestAttempt[]> {
  const db = getDb()
  const { data } = await db.from('test_attempts')
    .select('*')
    .eq('user_id', userId)
    .eq('lesson_id', lessonId)
    .order('completed_at', { ascending: false })
  return (data ?? []).map(rowToTestAttempt)
}

export async function getAllTestAttempts(): Promise<TestAttempt[]> {
  const db = getDb()
  const { data } = await db.from('test_attempts').select('*').order('completed_at', { ascending: false })
  return (data ?? []).map(rowToTestAttempt)
}

// ── Analytics ──────────────────────────────────────────────────────────────

export async function getStudentGrade(
  userId: string
): Promise<{ grade: string; percentage: number; completedTopics: number }> {
  const prog = await getProgress(userId, 'raqamli-texnologiyalar')
  if (!prog) return { grade: 'F', percentage: 0, completedTopics: 0 }
  const pct = prog.overallPercentage
  let grade = 'F'
  if (pct >= 90) grade = 'A'
  else if (pct >= 75) grade = 'B'
  else if (pct >= 60) grade = 'C'
  else if (pct >= 50) grade = 'D'
  return { grade, percentage: pct, completedTopics: prog.completedLessons }
}
