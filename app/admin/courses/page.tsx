import { getCourse } from '@/lib/data'
import Card, { CardContent, CardHeader } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { BookOpen, Clock, FileText, ClipboardList } from 'lucide-react'
import Link from 'next/link'

export const metadata = { title: 'Kurslar | Admin' }

export default function CoursesPage() {
  const course = getCourse()

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-display text-text-primary">Kurslar</h1>
        <p className="text-text-secondary text-sm mt-1">Kurs tarkibini boshqarish</p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <Badge variant="blue" className="mb-2">Faol kurs</Badge>
              <h2 className="text-lg font-bold font-display text-text-primary">{course.title}</h2>
              <p className="text-sm text-text-secondary mt-1 max-w-xl">{course.shortDesc}</p>
            </div>
          </div>
          <div className="flex gap-6 mt-4 text-sm text-text-secondary">
            <span className="flex items-center gap-1.5"><BookOpen size={14} className="text-blue-400" />{course.totalLessons} mavzu</span>
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-purple-400" />{course.totalDuration}</span>
            <span className="flex items-center gap-1.5"><ClipboardList size={14} className="text-cyan-400" />75 savol</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {course.lessons.map((lesson) => (
              <div key={lesson.id} className="flex items-center gap-3 p-3 bg-surface-2 rounded-xl border border-border">
                <div className="w-7 h-7 rounded-lg bg-surface-3 border border-border flex items-center justify-center text-xs font-bold text-blue-400 shrink-0">
                  {lesson.topicNumber}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-primary truncate">{lesson.title}</p>
                  <p className="text-xs text-text-muted">{lesson.videoDuration}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-text-muted shrink-0">
                  <span className="flex items-center gap-1"><FileText size={11} />Ma'ruza</span>
                  <span className="flex items-center gap-1"><ClipboardList size={11} />5 savol</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <p className="text-sm text-text-muted text-center">
        Kurs tarkibini o'zgartirish uchun <code className="text-blue-400">lib/data.ts</code> faylini tahrirlang.
      </p>
    </div>
  )
}
