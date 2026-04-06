'use client'

import { useState, useEffect, useCallback } from 'react'
import { CheckCircle2, XCircle, Clock, RotateCcw, Trophy, AlertCircle } from 'lucide-react'
import { Question } from '@/types'
import Button from '@/components/ui/Button'
import Progress from '@/components/ui/Progress'
import { cn, gradeFromPercentage, gradeColor, formatDuration, scoreLabel } from '@/lib/utils'

interface TestModuleProps {
  questions: Question[]
  lessonId: string
  topicNumber: number
  onComplete?: (score: number, percentage: number, passed: boolean) => void
  bestScore?: number
}

type Phase = 'intro' | 'quiz' | 'result'

export default function TestModule({ questions, lessonId, topicNumber, onComplete, bestScore }: TestModuleProps) {
  const [phase, setPhase] = useState<Phase>('intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null))
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes
  const [timeTaken, setTimeTaken] = useState(0)
  const [startTime, setStartTime] = useState(0)

  const currentQ = questions[current]

  const finish = useCallback(() => {
    const elapsed = Math.round((Date.now() - startTime) / 1000)
    setTimeTaken(elapsed)
    const score = answers.filter((a, i) => a === questions[i].correctIndex).length
    const pct = Math.round((score / questions.length) * 100)
    const passed = pct >= 60
    onComplete?.(score, pct, passed)
    setPhase('result')
  }, [answers, questions, startTime, onComplete])

  useEffect(() => {
    if (phase !== 'quiz') return
    if (timeLeft <= 0) { finish(); return }
    const t = setTimeout(() => setTimeLeft((p) => p - 1), 1000)
    return () => clearTimeout(t)
  }, [phase, timeLeft, finish])

  const startQuiz = () => {
    setAnswers(Array(questions.length).fill(null))
    setSelected(null)
    setRevealed(false)
    setCurrent(0)
    setTimeLeft(300)
    setStartTime(Date.now())
    setPhase('quiz')
  }

  const handleSelect = (idx: number) => {
    if (revealed) return
    setSelected(idx)
  }

  const handleConfirm = () => {
    if (selected === null) return
    const newAnswers = [...answers]
    newAnswers[current] = selected
    setAnswers(newAnswers)
    setRevealed(true)
  }

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      finish()
    } else {
      setCurrent((p) => p + 1)
      setSelected(null)
      setRevealed(false)
    }
  }

  const score = answers.filter((a, i) => a !== null && a === questions[i].correctIndex).length
  const pct = Math.round((score / questions.length) * 100)
  const passed = pct >= 60
  const grade = gradeFromPercentage(pct)

  // ── Intro ──
  if (phase === 'intro') {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center mb-6">
          <Trophy size={28} className="text-blue-400" />
        </div>
        <h2 className="text-xl font-bold font-display text-text-primary mb-2">
          {topicNumber}-mavzu testi
        </h2>
        <p className="text-text-secondary text-sm mb-6 max-w-sm">
          {questions.length} ta savol · 5 daqiqa · O'tish uchun 60% kerak
        </p>
        {bestScore !== undefined && bestScore > 0 && (
          <div className="mb-6 px-4 py-2.5 bg-surface-2 rounded-xl border border-border">
            <p className="text-sm text-text-secondary">
              Eng yaxshi natija: <span className={cn('font-bold', gradeColor(gradeFromPercentage(bestScore)))}>{bestScore}%</span>
            </p>
          </div>
        )}
        <Button onClick={startQuiz} size="lg">
          Testni boshlash
        </Button>
      </div>
    )
  }

  // ── Result ──
  if (phase === 'result') {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className={cn(
          'w-20 h-20 rounded-full flex items-center justify-center mb-6 text-3xl font-bold font-display',
          passed
            ? 'bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-400'
            : 'bg-red-500/10 border-2 border-red-500/30 text-red-400'
        )}>
          {pct}%
        </div>

        <h2 className="text-xl font-bold font-display text-text-primary mb-1">
          {passed ? 'Tabriklaymiz!' : "Harakat qiling!"}
        </h2>
        <p className="text-text-secondary text-sm mb-6">
          {score}/{questions.length} to'g'ri javob · {formatDuration(timeTaken)} sarflandi
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-3 w-full max-w-xs mb-8">
          {[
            { label: 'Ball', value: `${score}/${questions.length}`, color: 'text-blue-400' },
            { label: 'Baho', value: grade, color: gradeColor(grade) },
            { label: 'Natija', value: scoreLabel(pct), color: passed ? 'text-emerald-400' : 'text-red-400' },
          ].map((s) => (
            <div key={s.label} className="bg-surface-2 rounded-xl p-3 border border-border">
              <p className={cn('text-lg font-bold', s.color)}>{s.value}</p>
              <p className="text-xs text-text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Per-question review */}
        <div className="w-full space-y-2 text-left mb-8 max-w-lg">
          {questions.map((q, i) => {
            const userAns = answers[i]
            const correct = userAns === q.correctIndex
            return (
              <div key={q.id} className={cn('flex items-start gap-3 p-3 rounded-xl border', correct ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-red-500/20 bg-red-500/5')}>
                {correct
                  ? <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  : <XCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                }
                <div className="min-w-0">
                  <p className="text-sm text-text-primary font-medium">{i + 1}. {q.text}</p>
                  {!correct && (
                    <p className="text-xs text-emerald-400 mt-1">
                      To'g'ri: {q.options[q.correctIndex]}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <Button onClick={startQuiz} variant="secondary">
          <RotateCcw size={14} />
          Qayta urinish
        </Button>
      </div>
    )
  }

  // ── Quiz ──
  const timerColor = timeLeft < 60 ? 'text-red-400' : timeLeft < 120 ? 'text-yellow-400' : 'text-text-secondary'
  const isCorrect = selected === currentQ.correctIndex
  const answeredCount = answers.filter((a) => a !== null).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-text-secondary">
            {current + 1} / {questions.length}
          </span>
          <Progress value={current + 1} max={questions.length} size="sm" className="w-24" />
        </div>
        <div className={cn('flex items-center gap-1.5 text-sm font-mono font-medium', timerColor)}>
          <Clock size={14} />
          {formatDuration(timeLeft)}
        </div>
      </div>

      {/* Question */}
      <div className="bg-surface-2 rounded-2xl p-5 border border-border">
        <p className="text-text-primary font-medium leading-relaxed">
          {current + 1}. {currentQ.text}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-2.5">
        {currentQ.options.map((opt, i) => {
          let style = 'border-border bg-surface-2 text-text-secondary hover:border-blue-500/40 hover:bg-blue-500/5'
          if (selected === i && !revealed) style = 'border-blue-500/60 bg-blue-500/10 text-blue-300'
          if (revealed) {
            if (i === currentQ.correctIndex) style = 'border-emerald-500/60 bg-emerald-500/10 text-emerald-300'
            else if (selected === i) style = 'border-red-500/60 bg-red-500/10 text-red-300'
            else style = 'border-border bg-surface-2 text-text-muted opacity-60'
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={revealed}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-200',
                style
              )}
            >
              <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold shrink-0">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="text-sm">{opt}</span>
              {revealed && i === currentQ.correctIndex && (
                <CheckCircle2 size={14} className="text-emerald-400 ml-auto shrink-0" />
              )}
              {revealed && selected === i && i !== currentQ.correctIndex && (
                <XCircle size={14} className="text-red-400 ml-auto shrink-0" />
              )}
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {revealed && currentQ.explanation && (
        <div className="flex items-start gap-3 p-3.5 bg-blue-500/5 border border-blue-500/20 rounded-xl">
          <AlertCircle size={16} className="text-blue-400 shrink-0 mt-0.5" />
          <p className="text-sm text-text-secondary">{currentQ.explanation}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-end gap-3">
        {!revealed ? (
          <Button onClick={handleConfirm} disabled={selected === null}>
            Tasdiqlash
          </Button>
        ) : (
          <Button onClick={handleNext}>
            {current + 1 >= questions.length ? 'Natijani ko\'rish' : 'Keyingi savol'}
          </Button>
        )}
      </div>
    </div>
  )
}
