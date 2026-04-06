'use client'

import { useEffect, useState } from 'react'
import { Search, Trash2, User, ChevronUp, ChevronDown } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { cn, gradeColor, formatDate } from '@/lib/utils'

interface Student {
  id: string
  name: string
  email: string
  studentId?: string
  group?: string
  createdAt: string
  completedLessons: number
  overallPercentage: number
  grade: string
  lastActivityAt?: string
}

type SortKey = 'name' | 'overallPercentage' | 'completedLessons' | 'grade'

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<SortKey>('overallPercentage')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc')
  const [loading, setLoading] = useState(true)

  const load = () => {
    setLoading(true)
    fetch('/api/admin/students')
      .then((r) => r.json())
      .then((d) => { setStudents(d.students ?? []); setLoading(false) })
  }

  useEffect(() => { load() }, [])

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`"${name}" o'chirilsinmi?`)) return
    await fetch('/api/admin/students', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    load()
  }

  const toggleSort = (key: SortKey) => {
    if (sort === key) setSortDir((d) => d === 'asc' ? 'desc' : 'asc')
    else { setSort(key); setSortDir('desc') }
  }

  const filtered = students
    .filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      (s.group ?? '').toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const aVal = a[sort]
      const bVal = b[sort]
      const cmp = typeof aVal === 'string' ? (aVal).localeCompare(bVal as string) : (aVal as number) - (bVal as number)
      return sortDir === 'asc' ? cmp : -cmp
    })

  const SortIcon = ({ col }: { col: SortKey }) => sort === col
    ? sortDir === 'asc' ? <ChevronUp size={12} /> : <ChevronDown size={12} />
    : null

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold font-display text-text-primary">Talabalar</h1>
          <p className="text-text-secondary text-sm mt-1">{students.length} talaba ro'yxatdan o'tgan</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ism, email yoki guruh bo'yicha qidirish..."
          className="w-full pl-10 pr-4 py-2.5 bg-surface border border-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-blue-500/50 transition-colors"
        />
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                {[
                  { key: 'name' as SortKey, label: 'Ism' },
                  { key: null, label: 'Email' },
                  { key: null, label: 'Guruh' },
                  { key: 'completedLessons' as SortKey, label: 'Mavzular' },
                  { key: 'overallPercentage' as SortKey, label: 'Ball' },
                  { key: 'grade' as SortKey, label: 'Baho' },
                  { key: null, label: '' },
                ].map((col, i) => (
                  <th
                    key={i}
                    onClick={() => col.key && toggleSort(col.key)}
                    className={cn(
                      'px-4 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wider',
                      col.key && 'cursor-pointer hover:text-text-secondary select-none'
                    )}
                  >
                    <span className="flex items-center gap-1">
                      {col.label}
                      {col.key && <SortIcon col={col.key} />}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array(5).fill(0).map((_, i) => (
                  <tr key={i} className="border-b border-border/50">
                    {Array(7).fill(0).map((_, j) => (
                      <td key={j} className="px-4 py-3"><div className="h-4 rounded shimmer" /></td>
                    ))}
                  </tr>
                ))
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-text-muted">
                    Talaba topilmadi
                  </td>
                </tr>
              ) : (
                filtered.map((s) => (
                  <tr key={s.id} className="border-b border-border/50 hover:bg-surface-2 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                          {s.name[0]?.toUpperCase()}
                        </div>
                        <div>
                          <p className="font-medium text-text-primary">{s.name}</p>
                          {s.studentId && <p className="text-xs text-text-muted">{s.studentId}</p>}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-text-secondary">{s.email}</td>
                    <td className="px-4 py-3">
                      {s.group ? <Badge variant="blue">{s.group}</Badge> : <span className="text-text-muted">—</span>}
                    </td>
                    <td className="px-4 py-3 text-text-secondary">{s.completedLessons}/15</td>
                    <td className="px-4 py-3 font-medium text-text-primary">{s.overallPercentage}%</td>
                    <td className="px-4 py-3">
                      <span className={cn('font-bold', gradeColor(s.grade))}>{s.grade}</span>
                    </td>
                    <td className="px-4 py-3">
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(s.id, s.name)}
                      >
                        <Trash2 size={12} />
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
