import { Trophy, CheckCircle2, BookOpen, ClipboardList } from 'lucide-react'
import { StudentProgress } from '@/types'
import Progress from '@/components/ui/Progress'
import { cn, gradeFromPercentage, gradeColor, gradeLabel } from '@/lib/utils'

interface CourseProgressProps {
  progress: StudentProgress | null
  totalLessons?: number
}

export default function CourseProgress({ progress, totalLessons = 15 }: CourseProgressProps) {
  const completed = progress?.completedLessons ?? 0
  const overall = progress?.overallPercentage ?? 0
  const grade = gradeFromPercentage(overall)

  const videoWatched = progress?.lessons.filter((l) => l.videoWatched).length ?? 0
  const lectureRead = progress?.lessons.filter((l) => l.lectureRead).length ?? 0
  const testsPassed = progress?.lessons.filter((l) => l.testPassed).length ?? 0

  const stats = [
    { icon: <CheckCircle2 size={14} />, label: 'Testlar', value: testsPassed, color: 'text-emerald-400' },
    { icon: <BookOpen size={14} />, label: "Ma'ruzalar", value: lectureRead, color: 'text-blue-400' },
    { icon: <ClipboardList size={14} />, label: 'Videolar', value: videoWatched, color: 'text-purple-400' },
  ]

  return (
    <div className="space-y-4">
      {/* Overall */}
      <div className="bg-surface-2 rounded-xl p-4 border border-border">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Umumiy progress</span>
          <span className={cn('text-lg font-bold font-display', gradeColor(grade))}>{grade}</span>
        </div>
        <Progress value={overall} showLabel size="md" />
        <p className="text-xs text-text-muted mt-2">{gradeLabel(grade)}</p>
      </div>

      {/* Completed lessons */}
      <div className="bg-surface-2 rounded-xl p-4 border border-border">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Mavzular</span>
          <span className="text-sm font-bold text-text-primary">
            {completed}/{totalLessons}
          </span>
        </div>
        <Progress value={completed} max={totalLessons} size="sm" />
      </div>

      {/* Stats */}
      {stats.map((s) => (
        <div key={s.label} className="flex items-center justify-between px-4 py-3 bg-surface-2 rounded-xl border border-border">
          <div className={cn('flex items-center gap-2 text-sm', s.color)}>
            {s.icon}
            <span className="text-text-secondary">{s.label}</span>
          </div>
          <span className={cn('text-sm font-semibold', s.color)}>
            {s.value}/{totalLessons}
          </span>
        </div>
      ))}

      {/* Certificate hint */}
      {completed === totalLessons && (
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <Trophy size={16} className="text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-400">Sertifikat tayyor!</span>
          </div>
          <p className="text-xs text-text-secondary">Barcha mavzularni muvaffaqiyatli tugatdingiz.</p>
        </div>
      )}
    </div>
  )
}
