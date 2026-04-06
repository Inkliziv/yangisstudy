'use client'

import Link from 'next/link'
import { CheckCircle2, Circle, Lock, PlayCircle, BookOpen, ClipboardList } from 'lucide-react'
import { Lesson } from '@/types'
import { LessonProgress } from '@/types'
import { cn } from '@/lib/utils'

interface LessonListProps {
  lessons: Lesson[]
  currentLessonId?: string
  progress?: LessonProgress[]
  courseSlug: string
}

export default function LessonList({ lessons, currentLessonId, progress = [], courseSlug }: LessonListProps) {
  const getProgress = (lessonId: string) => progress.find((p) => p.lessonId === lessonId)

  const isUnlocked = (index: number) => {
    if (index === 0) return true
    const prevLesson = lessons[index - 1]
    const prevProgress = getProgress(prevLesson.id)
    return prevProgress?.testPassed ?? false
  }

  return (
    <div className="space-y-1">
      <div className="px-3 pb-2">
        <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
          Mavzular ({lessons.length})
        </p>
      </div>
      {lessons.map((lesson, index) => {
        const prog = getProgress(lesson.id)
        const unlocked = isUnlocked(index)
        const isActive = lesson.id === currentLessonId

        const statusIcon = prog?.testPassed ? (
          <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
        ) : unlocked ? (
          <Circle size={16} className="text-text-muted shrink-0" />
        ) : (
          <Lock size={14} className="text-text-muted shrink-0" />
        )

        return (
          <div key={lesson.id}>
            {unlocked ? (
              <Link
                href={`/course/${courseSlug}/lesson/${lesson.id}`}
                className={cn(
                  'flex items-start gap-3 px-3 py-3 rounded-xl transition-all duration-200 group',
                  isActive
                    ? 'bg-blue-500/10 border border-blue-500/20'
                    : 'hover:bg-surface-2 border border-transparent'
                )}
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-surface-3 text-xs font-bold text-text-muted shrink-0 mt-0.5">
                  {lesson.topicNumber}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      'text-sm font-medium leading-snug truncate',
                      isActive ? 'text-blue-400' : 'text-text-primary group-hover:text-blue-400'
                    )}
                  >
                    {lesson.title}
                  </p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className={cn('flex items-center gap-1 text-xs', prog?.videoWatched ? 'text-emerald-400' : 'text-text-muted')}>
                      <PlayCircle size={11} />
                      Video
                    </span>
                    <span className={cn('flex items-center gap-1 text-xs', prog?.lectureRead ? 'text-emerald-400' : 'text-text-muted')}>
                      <BookOpen size={11} />
                      Ma'ruza
                    </span>
                    <span className={cn('flex items-center gap-1 text-xs', prog?.testPassed ? 'text-emerald-400' : 'text-text-muted')}>
                      <ClipboardList size={11} />
                      Test {prog?.testPassed ? `${prog.testPercentage}%` : ''}
                    </span>
                  </div>
                </div>
                {statusIcon}
              </Link>
            ) : (
              <div className="flex items-start gap-3 px-3 py-3 rounded-xl opacity-40 cursor-not-allowed">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-surface-3 text-xs font-bold text-text-muted shrink-0 mt-0.5">
                  {lesson.topicNumber}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-secondary leading-snug truncate">
                    {lesson.title}
                  </p>
                  <p className="text-xs text-text-muted mt-1">Oldingi testni bajaring</p>
                </div>
                {statusIcon}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
