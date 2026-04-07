import { Metadata } from 'next'
import AdminCharts from '../AdminCharts'
import { getAllUsers, getAllProgress, getAllTestAttempts, getStudentGrade } from '@/lib/store'
import Card from '@/components/ui/Card'
import { Users, CheckCircle2, TrendingUp, Award } from 'lucide-react'

export const metadata: Metadata = { title: 'Tahlil | Admin' }

export default async function AnalyticsPage() {
  const users = await getAllUsers()
  const students = users.filter((u) => u.role === 'student')
  const allProgress = await getAllProgress()
  const allAttempts = await getAllTestAttempts()

  const totalTestsPassed = allAttempts.filter((a) => a.passed).length
  const totalAttempts = allAttempts.length

  const grades = await Promise.all(students.map((s) => getStudentGrade(s.id)))
  const percentages = grades.map((g) => g.percentage)
  const avgPct = percentages.length > 0 ? Math.round(percentages.reduce((a, b) => a + b, 0) / percentages.length) : 0

  const fullyCompleted = allProgress.filter((p) => p.completedLessons >= 15).length

  const summary = [
    { label: 'Jami urinishlar', value: totalAttempts, icon: <TrendingUp size={18} />, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: "O'tilgan testlar", value: totalTestsPassed, icon: <CheckCircle2 size={18} />, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: "O'rtacha ball", value: `${avgPct}%`, icon: <Award size={18} />, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
    { label: 'Kursni tugatgan', value: fullyCompleted, icon: <Users size={18} />, color: 'text-purple-400', bg: 'bg-purple-500/10' },
  ]

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-display text-text-primary">Tahlil</h1>
        <p className="text-text-secondary text-sm mt-1">Platform statistikasi va hisobotlar</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {summary.map((s) => (
          <Card key={s.label} className="p-5">
            <div className={`w-9 h-9 rounded-xl ${s.bg} ${s.color} flex items-center justify-center mb-3`}>
              {s.icon}
            </div>
            <p className="text-xl font-bold font-display text-text-primary">{s.value}</p>
            <p className="text-xs text-text-muted mt-1">{s.label}</p>
          </Card>
        ))}
      </div>

      <AdminCharts />
    </div>
  )
}
