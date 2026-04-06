'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import { User, Mail, Hash, Users, Trophy, BookOpen, ClipboardList, Printer } from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Progress from '@/components/ui/Progress'
import { StudentProgress } from '@/types'
import { cn, gradeColor, gradeLabel, gradeFromPercentage, formatDate } from '@/lib/utils'

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const [progress, setProgress] = useState<StudentProgress | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') window.location.href = '/auth/login'
  }, [status])

  useEffect(() => {
    if (!session) return
    fetch('/api/progress?courseId=raqamli-texnologiyalar')
      .then((r) => r.json())
      .then((d) => setProgress(d.progress ?? null))
  }, [session])

  if (!session) return null

  const user = session.user as any
  const pct = progress?.overallPercentage ?? 0
  const grade = gradeFromPercentage(pct)
  const completed = progress?.completedLessons ?? 0
  const allDone = completed >= 15

  const printCertificate = () => {
    window.print()
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold font-display text-text-primary mb-6">Mening profilim</h1>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        {/* User info */}
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white">
              {user.name?.[0]?.toUpperCase()}
            </div>
            <div>
              <p className="font-bold text-text-primary">{user.name}</p>
              <Badge variant={user.role === 'admin' ? 'purple' : 'blue'} className="mt-1">
                {user.role === 'admin' ? 'Admin' : 'Talaba'}
              </Badge>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2.5 text-text-secondary">
              <Mail size={14} className="text-text-muted shrink-0" />
              {user.email}
            </div>
            {user.studentId && (
              <div className="flex items-center gap-2.5 text-text-secondary">
                <Hash size={14} className="text-text-muted shrink-0" />
                {user.studentId}
              </div>
            )}
            {user.group && (
              <div className="flex items-center gap-2.5 text-text-secondary">
                <Users size={14} className="text-text-muted shrink-0" />
                {user.group}
              </div>
            )}
          </div>
        </Card>

        {/* Progress summary */}
        <Card className="p-6">
          <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">Kurs progressi</h2>
          <div className="flex items-center justify-between mb-2">
            <span className="text-text-secondary text-sm">Umumiy ball</span>
            <span className={cn('text-xl font-bold font-display', gradeColor(grade))}>{grade}</span>
          </div>
          <Progress value={pct} showLabel className="mb-4" />
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="bg-surface-2 rounded-xl p-3 border border-border">
              <p className="text-lg font-bold text-text-primary">{completed}/15</p>
              <p className="text-xs text-text-muted">Mavzular</p>
            </div>
            <div className="bg-surface-2 rounded-xl p-3 border border-border">
              <p className="text-lg font-bold text-text-primary">{pct}%</p>
              <p className="text-xs text-text-muted">O'rtacha ball</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Certificate */}
      {allDone && (
        <>
          <Card className="p-6 mb-6 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 border-yellow-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Trophy size={24} className="text-yellow-400" />
                <div>
                  <p className="font-bold text-text-primary">Sertifikat tayyor!</p>
                  <p className="text-sm text-text-secondary">Barcha 15 mavzuni muvaffaqiyatli tugatdingiz</p>
                </div>
              </div>
              <Button onClick={printCertificate} variant="secondary" size="sm">
                <Printer size={14} />
                Chop etish
              </Button>
            </div>
          </Card>

          {/* Printable certificate */}
          <div id="certificate" className="hidden print:block bg-white text-black p-16 text-center">
            <div className="border-8 border-double border-yellow-600 p-12">
              <p className="text-4xl font-bold mb-2" style={{ fontFamily: 'serif' }}>S-STUDY</p>
              <p className="text-lg text-gray-600 mb-8">TATU — Raqamli Ta'lim Platformasi</p>
              <p className="text-xl mb-6">Ushbu sertifikat</p>
              <p className="text-3xl font-bold mb-6" style={{ fontFamily: 'serif' }}>{user.name}</p>
              <p className="text-xl mb-2">ga berildi. U quyidagi kursni muvaffaqiyatli tugatdi:</p>
              <p className="text-2xl font-bold mb-8" style={{ fontFamily: 'serif' }}>
                "Raqamli Texnologiyalar va Innovatsiyalar"
              </p>
              <p className="text-lg mb-2">Umumiy ball: <strong>{pct}%</strong> — Baho: <strong>{grade}</strong></p>
              {user.studentId && <p className="text-base text-gray-600 mb-1">Talaba ID: {user.studentId}</p>}
              {user.group && <p className="text-base text-gray-600 mb-8">Guruh: {user.group}</p>}
              <p className="text-base text-gray-500">Sana: {new Date().toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </>
      )}

      {/* Lesson results */}
      {progress && progress.lessons.length > 0 && (
        <Card>
          <div className="p-6">
            <h2 className="text-base font-semibold text-text-primary font-display mb-4">Mavzu natijalari</h2>
            <div className="space-y-2">
              {progress.lessons
                .sort((a, b) => a.topicNumber - b.topicNumber)
                .map((l) => (
                  <div key={l.lessonId} className="flex items-center gap-3 p-3 bg-surface-2 rounded-xl border border-border">
                    <div className="w-7 h-7 rounded-lg bg-surface-3 border border-border flex items-center justify-center text-xs font-bold text-blue-400 shrink-0">
                      {l.topicNumber}
                    </div>
                    <div className="flex-1">
                      <Progress value={l.testPercentage} size="sm" />
                    </div>
                    <span className={cn('text-sm font-bold w-10 text-right', l.testPassed ? 'text-emerald-400' : 'text-red-400')}>
                      {l.testPercentage}%
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
