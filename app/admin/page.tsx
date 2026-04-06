import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getAllUsers, getAllProgress, getAllTestAttempts } from '@/lib/store'
import { Users, CheckCircle2, BookOpen, TrendingUp } from 'lucide-react'
import Card from '@/components/ui/Card'
import AdminCharts from './AdminCharts'

export const metadata = { title: 'Admin Dashboard' }

export default async function AdminPage() {
  const session = await getServerSession(authOptions)
  const users = getAllUsers()
  const students = users.filter((u) => u.role === 'student')
  const allProgress = getAllProgress()
  const allAttempts = getAllTestAttempts()

  const totalTestsPassed = allAttempts.filter((a) => a.passed).length
  const activeStudents = allProgress.filter((p) => {
    const d = new Date(p.lastActivityAt)
    return Date.now() - d.getTime() < 7 * 24 * 3600 * 1000
  }).length

  const stats = [
    { label: 'Jami talabalar', value: students.length, icon: <Users size={20} />, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'Faol (7 kun)', value: activeStudents, icon: <TrendingUp size={20} />, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'O\'tilgan testlar', value: totalTestsPassed, icon: <CheckCircle2 size={20} />, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Kurslar', value: 1, icon: <BookOpen size={20} />, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  ]

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-display text-text-primary">Dashboard</h1>
        <p className="text-text-secondary text-sm mt-1">Salom, {session?.user?.name}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <Card key={s.label} className="p-5">
            <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-3 ${s.color}`}>
              {s.icon}
            </div>
            <p className="text-2xl font-bold font-display text-text-primary">{s.value}</p>
            <p className="text-xs text-text-muted mt-1">{s.label}</p>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <AdminCharts />
    </div>
  )
}
