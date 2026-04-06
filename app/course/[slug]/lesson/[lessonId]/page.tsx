'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useParams, useRouter } from 'next/navigation'
import { LESSONS, getCourse, getQuestionsByLessonId } from '@/lib/data'
import VideoPlayer from '@/components/course/VideoPlayer'
import LectureText from '@/components/course/LectureText'
import TestModule from '@/components/course/TestModule'
import LessonList from '@/components/course/LessonList'
import CourseProgress from '@/components/course/CourseProgress'
import Badge from '@/components/ui/Badge'
import { Play, BookOpen, ClipboardList, Trophy, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LessonProgress, StudentProgress } from '@/types'
import Button from '@/components/ui/Button'
import Link from 'next/link'

type Tab = 'video' | 'lecture' | 'test' | 'grade'

export default function LessonPage() {
  const { data: session } = useSession()
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const lessonId = params.lessonId as string

  const lesson = LESSONS.find((l) => l.id === lessonId)
  const questions = lesson ? getQuestionsByLessonId(lesson.id) : []
  const course = getCourse()
  const lessonIndex = LESSONS.findIndex((l) => l.id === lessonId)
  const prevLesson = lessonIndex > 0 ? LESSONS[lessonIndex - 1] : null
  const nextLesson = lessonIndex < LESSONS.length - 1 ? LESSONS[lessonIndex + 1] : null

  const [tab, setTab] = useState<Tab>('video')
  const [progress, setProgress] = useState<StudentProgress | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const userId = (session?.user as any)?.id

  useEffect(() => {
    if (!userId) return
    fetch(`/api/progress?courseId=${course.id}`)
      .then((r) => r.json())
      .then((d) => setProgress(d.progress ?? null))
  }, [userId, course.id])

  const lessonProg = progress?.lessons.find((l) => l.lessonId === lessonId)
  const bestScore = lessonProg?.testPercentage ?? 0

  const markVideo = async () => {
    if (!userId) return
    await fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ courseId: course.id, lessonId, topicNumber: lesson?.topicNumber, videoWatched: true }),
    })
    refreshProgress()
  }

  const markLecture = async () => {
    if (!userId) return
    await fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ courseId: course.id, lessonId, topicNumber: lesson?.topicNumber, lectureRead: true }),
    })
    refreshProgress()
  }

  const handleTestComplete = async (score: number, percentage: number, passed: boolean) => {
    if (!userId) return
    await fetch('/api/tests/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        courseId: course.id,
        lessonId,
        topicNumber: lesson?.topicNumber,
        score,
        percentage,
        passed,
        totalQuestions: questions.length,
        answers: [],
      }),
    })
    refreshProgress()
  }

  const refreshProgress = () => {
    if (!userId) return
    fetch(`/api/progress?courseId=${course.id}`)
      .then((r) => r.json())
      .then((d) => setProgress(d.progress ?? null))
  }

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-secondary mb-4">Dars topilmadi</p>
          <Link href={`/course/${slug}`}><Button variant="secondary">Kursga qaytish</Button></Link>
        </div>
      </div>
    )
  }

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'video', label: 'Video', icon: <Play size={14} /> },
    { id: 'lecture', label: "Ma'ruza", icon: <BookOpen size={14} /> },
    { id: 'test', label: 'Test', icon: <ClipboardList size={14} /> },
    { id: 'grade', label: 'Natija', icon: <Trophy size={14} /> },
  ]

  return (
    <div className="min-h-screen flex">
      {/* Sidebar overlay (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Left sidebar */}
      <aside className={cn(
        'fixed left-0 top-16 bottom-0 z-40 w-72 bg-surface border-r border-border overflow-y-auto transition-transform duration-300 lg:sticky lg:translate-x-0',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="p-4">
          <div className="mb-4">
            <Link href={`/course/${slug}`} className="flex items-center gap-1.5 text-sm text-text-muted hover:text-blue-400 transition-colors">
              <ChevronLeft size={14} />
              Kursga qaytish
            </Link>
          </div>
          <LessonList
            lessons={LESSONS}
            currentLessonId={lessonId}
            progress={progress?.lessons ?? []}
            courseSlug={slug}
          />
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Mobile header */}
        <div className="sticky top-16 z-30 flex items-center gap-3 px-4 py-3 bg-surface border-b border-border lg:hidden">
          <button onClick={() => setSidebarOpen(true)} className="p-1.5 rounded-lg hover:bg-surface-2 text-text-muted">
            <Menu size={18} />
          </button>
          <span className="text-sm font-medium text-text-primary truncate">{lesson.title}</span>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-6 lg:px-8">
          {/* Lesson header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="blue">{lesson.topicNumber}-mavzu</Badge>
              {lessonProg?.testPassed && <Badge variant="green">O'tildi</Badge>}
            </div>
            <h1 className="text-xl font-bold font-display text-text-primary">{lesson.title}</h1>
            <p className="text-sm text-text-secondary mt-1">{lesson.description}</p>
          </div>

          {/* Tab nav */}
          <div className="flex gap-1 p-1 bg-surface-2 rounded-xl mb-6 border border-border">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  'flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-sm font-medium transition-all',
                  tab === t.id
                    ? 'bg-surface text-text-primary shadow-sm border border-border'
                    : 'text-text-muted hover:text-text-secondary'
                )}
              >
                {t.icon}
                <span className="hidden sm:inline">{t.label}</span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="bg-surface border border-border rounded-2xl p-6">
            {tab === 'video' && (
              <VideoPlayer
                videoUrl={lesson.videoUrl}
                title={lesson.title}
                onWatched={markVideo}
              />
            )}
            {tab === 'lecture' && (
              <LectureText
                content={lesson.lectureText}
                title={lesson.title}
                onRead={markLecture}
              />
            )}
            {tab === 'test' && (
              questions.length > 0 ? (
                <TestModule
                  questions={questions}
                  lessonId={lessonId}
                  topicNumber={lesson.topicNumber}
                  onComplete={handleTestComplete}
                  bestScore={bestScore}
                />
              ) : (
                <p className="text-text-muted text-center py-8">Bu mavzu uchun test mavjud emas</p>
              )
            )}
            {tab === 'grade' && (
              <div className="max-w-sm mx-auto">
                <h2 className="text-lg font-bold font-display text-text-primary mb-6 text-center">Natijalar</h2>
                <CourseProgress progress={progress} totalLessons={15} />
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            {prevLesson ? (
              <Link href={`/course/${slug}/lesson/${prevLesson.id}`}>
                <Button variant="secondary" size="sm">
                  <ChevronLeft size={14} />
                  Oldingi
                </Button>
              </Link>
            ) : <div />}
            {nextLesson && lessonProg?.testPassed && (
              <Link href={`/course/${slug}/lesson/${nextLesson.id}`}>
                <Button size="sm">
                  Keyingi
                  <ChevronRight size={14} />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Right sidebar (progress) — desktop only */}
      <aside className="hidden xl:block w-64 shrink-0 border-l border-border p-4 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
        <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Progress</h3>
        <CourseProgress progress={progress} totalLessons={15} />
      </aside>
    </div>
  )
}
