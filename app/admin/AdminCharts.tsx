'use client'

import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'
import Card, { CardContent, CardHeader } from '@/components/ui/Card'
import { DashboardStats } from '@/types'

export default function AdminCharts() {
  const [stats, setStats] = useState<DashboardStats | null>(null)

  useEffect(() => {
    fetch('/api/admin/analytics').then((r) => r.json()).then(setStats)
  }, [])

  if (!stats) {
    return (
      <div className="grid lg:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="h-64 rounded-2xl shimmer" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Activity chart */}
      <Card>
        <CardHeader>
          <h2 className="text-base font-semibold text-text-primary font-display">Oylik faollik</h2>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={stats.monthlyActivity}>
              <XAxis dataKey="month" tick={{ fill: '#475569', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#475569', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: '#0f1629', border: '1px solid #1e2d4a', borderRadius: 8, color: '#f1f5f9', fontSize: 12 }}
              />
              <Bar dataKey="students" name="Talabalar" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="tests" name="Testlar" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Grade distribution */}
      <Card>
        <CardHeader>
          <h2 className="text-base font-semibold text-text-primary font-display">Baholar taqsimoti</h2>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={stats.gradeDistribution}
                dataKey="count"
                nameKey="grade"
                cx="50%"
                cy="50%"
                outerRadius={70}
                label={({ grade, count }) => count > 0 ? `${grade}: ${count}` : ''}
                labelLine={false}
              >
                {stats.gradeDistribution.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Legend
                formatter={(value) => <span style={{ color: '#94a3b8', fontSize: 12 }}>{value}</span>}
              />
              <Tooltip
                contentStyle={{ background: '#0f1629', border: '1px solid #1e2d4a', borderRadius: 8, color: '#f1f5f9', fontSize: 12 }}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top students */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <h2 className="text-base font-semibold text-text-primary font-display">Eng yaxshi talabalar</h2>
        </CardHeader>
        <CardContent>
          {stats.topStudents.length === 0 ? (
            <p className="text-text-muted text-sm">Ma'lumot yo'q</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-text-muted font-medium">#</th>
                    <th className="text-left py-2 text-text-muted font-medium">Ism</th>
                    <th className="text-left py-2 text-text-muted font-medium">Guruh</th>
                    <th className="text-right py-2 text-text-muted font-medium">Ball</th>
                    <th className="text-right py-2 text-text-muted font-medium">Baho</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.topStudents.map((s, i) => (
                    <tr key={s.id} className="border-b border-border/50 hover:bg-surface-2 transition-colors">
                      <td className="py-2.5 text-text-muted">{i + 1}</td>
                      <td className="py-2.5 text-text-primary font-medium">{s.name}</td>
                      <td className="py-2.5 text-text-secondary">{s.group}</td>
                      <td className="py-2.5 text-right text-text-secondary">{s.percentage}%</td>
                      <td className="py-2.5 text-right font-bold text-blue-400">{s.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
