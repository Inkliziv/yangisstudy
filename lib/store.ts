import fs from 'fs'
import path from 'path'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { User, StudentProgress, TestAttempt, LessonProgress, Lesson, Question } from '@/types'
import { LESSONS as SEED_LESSONS, QUESTIONS as SEED_QUESTIONS, COURSE_DATA } from './data'

// On Vercel, use /tmp (writable). Locally use ./data/
const DATA_DIR = process.env.VERCEL
  ? '/tmp/sstudy'
  : path.join(process.cwd(), 'data')

const STORE_FILE = path.join(DATA_DIR, 'store.json')

interface Store {
  users: User[]
  progress: StudentProgress[]
  testAttempts: TestAttempt[]
  lessons: Lesson[]
  questions: Question[]
}

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
}

function getDefaultStore(): Store {
  const adminHash = bcrypt.hashSync('admin123', 10)
  const studentHash = bcrypt.hashSync('student123', 10)

  return {
    users: [
      {
        id: 'admin-001',
        email: 'admin@sstudy.uz',
        name: 'Admin Foydalanuvchi',
        password: adminHash,
        role: 'admin',
        createdAt: new Date().toISOString(),
      },
      {
        id: 'student-001',
        email: 'student@tatu.uz',
        name: 'Demo Talaba',
        password: studentHash,
        role: 'student',
        studentId: 'TATU-2024-001',
        group: 'MT-21',
        createdAt: new Date().toISOString(),
      },
    ],
    progress: [],
    testAttempts: [],
    lessons: SEED_LESSONS,
    questions: SEED_QUESTIONS,
  }
}

export function getStore(): Store {
  ensureDataDir()
  if (!fs.existsSync(STORE_FILE)) {
    const defaultStore = getDefaultStore()
    fs.writeFileSync(STORE_FILE, JSON.stringify(defaultStore, null, 2))
    return defaultStore
  }
  try {
    const raw = fs.readFileSync(STORE_FILE, 'utf-8')
    const store = JSON.parse(raw) as Store
    // Migrate: if old store has no lessons/questions, seed them
    if (!store.lessons || store.lessons.length === 0) {
      store.lessons = SEED_LESSONS
    }
    if (!store.questions || store.questions.length === 0) {
      store.questions = SEED_QUESTIONS
    }
    return store
  } catch {
    const defaultStore = getDefaultStore()
    fs.writeFileSync(STORE_FILE, JSON.stringify(defaultStore, null, 2))
    return defaultStore
  }
}

function saveStore(store: Store) {
  ensureDataDir()
  fs.writeFileSync(STORE_FILE, JSON.stringify(store, null, 2))
}

// ── Users ──────────────────────────────────────────────────────────────────

export function getAllUsers(): User[] {
  return getStore().users
}

export function getUserById(id: string): User | undefined {
  return getStore().users.find((u) => u.id === id)
}

export function getUserByEmail(email: string): User | undefined {
  return getStore().users.find((u) => u.email === email)
}

export async function createUser(data: {
  email: string
  name: string
  password: string
  studentId?: string
  group?: string
}): Promise<User> {
  const store = getStore()
  if (store.users.find((u) => u.email === data.email)) {
    throw new Error("Bu email allaqachon ro'yxatdan o'tgan")
  }
  const hashed = await bcrypt.hash(data.password, 10)
  const user: User = {
    id: uuidv4(),
    email: data.email,
    name: data.name,
    password: hashed,
    role: 'student',
    studentId: data.studentId,
    group: data.group,
    createdAt: new Date().toISOString(),
  }
  store.users.push(user)
  saveStore(store)
  return user
}

export function updateUser(id: string, updates: Partial<User>): User | null {
  const store = getStore()
  const idx = store.users.findIndex((u) => u.id === id)
  if (idx === -1) return null
  store.users[idx] = { ...store.users[idx], ...updates }
  saveStore(store)
  return store.users[idx]
}

export function deleteUser(id: string): boolean {
  const store = getStore()
  const before = store.users.length
  store.users = store.users.filter((u) => u.id !== id)
  saveStore(store)
  return store.users.length < before
}

// ── Lessons ────────────────────────────────────────────────────────────────

export function getStoreLessons(): Lesson[] {
  return getStore().lessons.sort((a, b) => a.order - b.order)
}

export function getStoreLessonById(id: string): Lesson | undefined {
  return getStore().lessons.find((l) => l.id === id)
}

export function createLesson(data: Omit<Lesson, 'id'>): Lesson {
  const store = getStore()
  const lesson: Lesson = { ...data, id: uuidv4() }
  store.lessons.push(lesson)
  saveStore(store)
  return lesson
}

export function updateLesson(id: string, updates: Partial<Lesson>): Lesson | null {
  const store = getStore()
  const idx = store.lessons.findIndex((l) => l.id === id)
  if (idx === -1) return null
  store.lessons[idx] = { ...store.lessons[idx], ...updates }
  saveStore(store)
  return store.lessons[idx]
}

export function deleteLesson(id: string): boolean {
  const store = getStore()
  const before = store.lessons.length
  store.lessons = store.lessons.filter((l) => l.id !== id)
  // Also delete related questions
  store.questions = store.questions.filter((q) => q.lessonId !== id)
  saveStore(store)
  return store.lessons.length < before
}

// ── Questions ──────────────────────────────────────────────────────────────

export function getStoreQuestions(lessonId?: string): Question[] {
  const store = getStore()
  if (lessonId) return store.questions.filter((q) => q.lessonId === lessonId)
  return store.questions
}

export function getStoreQuestionById(id: string): Question | undefined {
  return getStore().questions.find((q) => q.id === id)
}

export function createQuestion(data: Omit<Question, 'id'>): Question {
  const store = getStore()
  const question: Question = { ...data, id: uuidv4() }
  store.questions.push(question)
  saveStore(store)
  return question
}

export function updateQuestion(id: string, updates: Partial<Question>): Question | null {
  const store = getStore()
  const idx = store.questions.findIndex((q) => q.id === id)
  if (idx === -1) return null
  store.questions[idx] = { ...store.questions[idx], ...updates }
  saveStore(store)
  return store.questions[idx]
}

export function deleteQuestion(id: string): boolean {
  const store = getStore()
  const before = store.questions.length
  store.questions = store.questions.filter((q) => q.id !== id)
  saveStore(store)
  return store.questions.length < before
}

// ── Progress ───────────────────────────────────────────────────────────────

export function getProgress(userId: string, courseId: string): StudentProgress | null {
  const store = getStore()
  return store.progress.find((p) => p.userId === userId && p.courseId === courseId) ?? null
}

export function getAllProgress(): StudentProgress[] {
  return getStore().progress
}

export function initProgress(userId: string, courseId: string): StudentProgress {
  const store = getStore()
  const existing = store.progress.find((p) => p.userId === userId && p.courseId === courseId)
  if (existing) return existing
  const prog: StudentProgress = {
    userId,
    courseId,
    lessons: [],
    overallPercentage: 0,
    completedLessons: 0,
    startedAt: new Date().toISOString(),
    lastActivityAt: new Date().toISOString(),
  }
  store.progress.push(prog)
  saveStore(store)
  return prog
}

export function updateLessonProgress(
  userId: string,
  courseId: string,
  lessonUpdate: Partial<LessonProgress> & { lessonId: string; topicNumber: number }
): StudentProgress {
  const store = getStore()
  let prog = store.progress.find((p) => p.userId === userId && p.courseId === courseId)
  if (!prog) {
    prog = {
      userId,
      courseId,
      lessons: [],
      overallPercentage: 0,
      completedLessons: 0,
      startedAt: new Date().toISOString(),
      lastActivityAt: new Date().toISOString(),
    }
    store.progress.push(prog)
  }
  const lessonIdx = prog.lessons.findIndex((l) => l.lessonId === lessonUpdate.lessonId)
  if (lessonIdx === -1) {
    prog.lessons.push({
      lessonId: lessonUpdate.lessonId,
      topicNumber: lessonUpdate.topicNumber,
      videoWatched: lessonUpdate.videoWatched ?? false,
      lectureRead: lessonUpdate.lectureRead ?? false,
      testPassed: lessonUpdate.testPassed ?? false,
      testScore: lessonUpdate.testScore ?? 0,
      testPercentage: lessonUpdate.testPercentage ?? 0,
      attempts: lessonUpdate.attempts ?? 0,
      completedAt: lessonUpdate.completedAt,
    })
  } else {
    prog.lessons[lessonIdx] = { ...prog.lessons[lessonIdx], ...lessonUpdate }
  }
  const totalLessons = store.lessons.length || 15
  prog.completedLessons = prog.lessons.filter((l) => l.testPassed).length
  const totalPct = prog.lessons.reduce((acc, l) => acc + (l.testPercentage ?? 0), 0)
  prog.overallPercentage = Math.round(totalPct / totalLessons)
  prog.lastActivityAt = new Date().toISOString()
  const progIdx = store.progress.findIndex((p) => p.userId === userId && p.courseId === courseId)
  store.progress[progIdx] = prog
  saveStore(store)
  return prog
}

// ── Test Attempts ──────────────────────────────────────────────────────────

export function getTestAttempts(userId: string, lessonId: string): TestAttempt[] {
  return getStore().testAttempts.filter((a) => a.userId === userId && a.lessonId === lessonId)
}

export function getAllTestAttempts(): TestAttempt[] {
  return getStore().testAttempts
}

export function saveTestAttempt(attempt: Omit<TestAttempt, 'id'>): TestAttempt {
  const store = getStore()
  const newAttempt: TestAttempt = { ...attempt, id: uuidv4() }
  store.testAttempts.push(newAttempt)
  saveStore(store)
  return newAttempt
}

// ── Analytics ──────────────────────────────────────────────────────────────

export function getStudentGrade(userId: string): {
  grade: string
  percentage: number
  completedTopics: number
} {
  const store = getStore()
  const prog = store.progress.find(
    (p) => p.userId === userId && p.courseId === 'raqamli-texnologiyalar'
  )
  if (!prog) return { grade: 'F', percentage: 0, completedTopics: 0 }
  const pct = prog.overallPercentage
  let grade = 'F'
  if (pct >= 90) grade = 'A'
  else if (pct >= 75) grade = 'B'
  else if (pct >= 60) grade = 'C'
  else if (pct >= 50) grade = 'D'
  return { grade, percentage: pct, completedTopics: prog.completedLessons }
}
