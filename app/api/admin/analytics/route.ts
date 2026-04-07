import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getAllUsers, getAllProgress, getAllTestAttempts, getStudentGrade } from '@/lib/store'

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const users = await getAllUsers()
  const students = users.filter((u) => u.role === 'student')
  const allProgress = await getAllProgress()
  const allAttempts = await getAllTestAttempts()

  const totalStudents = students.length
  const activeStudents = allProgress.filter((p) => {
    const d = new Date(p.lastActivityAt)
    return Date.now() - d.getTime() < 30 * 24 * 3600 * 1000
  }).length

  const totalTestsPassed = allAttempts.filter((a) => a.passed).length

  // Fetch all grades in parallel
  const allGrades = await Promise.all(students.map((s) => getStudentGrade(s.id)))

  const percentages = allGrades.map((g) => g.percentage)
  const averageGrade = percentages.length > 0
    ? Math.round(percentages.reduce((a, b) => a + b, 0) / percentages.length)
    : 0

  const completionRate = students.length > 0
    ? Math.round((allProgress.filter((p) => p.completedLessons >= 15).length / students.length) * 100)
    : 0

  // Grade distribution
  const gradeDist = [
    { grade: 'A', count: 0, color: '#10b981' },
    { grade: 'B', count: 0, color: '#3b82f6' },
    { grade: 'C', count: 0, color: '#f59e0b' },
    { grade: 'D', count: 0, color: '#f97316' },
    { grade: 'F', count: 0, color: '#ef4444' },
  ]
  for (const { grade } of allGrades) {
    const found = gradeDist.find((g) => g.grade === grade)
    if (found) found.count++
  }

  // Monthly activity (last 6 months)
  const months = []
  for (let i = 5; i >= 0; i--) {
    const d = new Date()
    d.setMonth(d.getMonth() - i)
    const label = d.toLocaleDateString('uz-UZ', { month: 'short' })
    const monthKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
    const studentsThisMonth = allProgress.filter((p) => p.startedAt?.startsWith(monthKey)).length
    const testsThisMonth = allAttempts.filter((a) => a.completedAt?.startsWith(monthKey)).length
    months.push({ month: label, students: studentsThisMonth, tests: testsThisMonth })
  }

  // Top students
  const topStudents = students
    .map((s, i) => ({
      id: s.id,
      name: s.name,
      group: s.group ?? '-',
      percentage: allGrades[i].percentage,
      grade: allGrades[i].grade,
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 10)

  return NextResponse.json({
    totalStudents,
    activeStudents,
    averageGrade,
    completionRate,
    totalTestsPassed,
    monthlyActivity: months,
    gradeDistribution: gradeDist,
    topStudents,
  })
}
