'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import {
  ArrowLeft, Save, Plus, Trash2, Pencil, Check, X,
  PlayCircle, BookOpen, ClipboardList, GripVertical, AlertCircle
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Card, { CardHeader, CardContent } from '@/components/ui/Card'
import Modal from '@/components/ui/Modal'
import Badge from '@/components/ui/Badge'
import { Lesson, Question } from '@/types'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type Tab = 'info' | 'lecture' | 'questions'

const OPTION_LABELS = ['A', 'B', 'C', 'D', 'E']

export default function LessonEditPage() {
  const { lessonId } = useParams() as { lessonId: string }
  const router = useRouter()

  const [tab, setTab] = useState<Tab>('info')
  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saveMsg, setSaveMsg] = useState('')

  // Lesson form state
  const [form, setForm] = useState({
    title: '', slug: '', description: '', videoUrl: '', videoDuration: '',
    topicNumber: '', order: '', lectureText: '',
  })

  // Question modal
  const [showQModal, setShowQModal] = useState(false)
  const [editingQ, setEditingQ] = useState<Question | null>(null)
  const [qForm, setQForm] = useState({
    text: '',
    options: ['', '', '', ''],
    correctIndex: 0,
    explanation: '',
  })
  const [qSaving, setQSaving] = useState(false)

  const load = async () => {
    setLoading(true)
    const [lessonRes, qRes] = await Promise.all([
      fetch('/api/admin/lessons').then((r) => r.json()),
      fetch(`/api/admin/questions?lessonId=${lessonId}`).then((r) => r.json()),
    ])
    const found: Lesson | undefined = lessonRes.lessons?.find((l: Lesson) => l.id === lessonId)
    if (found) {
      setLesson(found)
      setForm({
        title: found.title,
        slug: found.slug,
        description: found.description,
        videoUrl: found.videoUrl,
        videoDuration: found.videoDuration,
        topicNumber: String(found.topicNumber),
        order: String(found.order),
        lectureText: found.lectureText,
      })
    }
    setQuestions(qRes.questions ?? [])
    setLoading(false)
  }

  useEffect(() => { load() }, [lessonId])

  // ── Save lesson info ──
  const handleSaveInfo = async () => {
    setSaving(true)
    setSaveMsg('')
    await fetch('/api/admin/lessons', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: lessonId,
        title: form.title,
        slug: form.slug,
        description: form.description,
        videoUrl: form.videoUrl,
        videoDuration: form.videoDuration,
        topicNumber: Number(form.topicNumber),
        order: Number(form.order),
      }),
    })
    setSaving(false)
    setSaveMsg('Saqlandi!')
    setTimeout(() => setSaveMsg(''), 2000)
  }

  const handleSaveLecture = async () => {
    setSaving(true)
    setSaveMsg('')
    await fetch('/api/admin/lessons', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: lessonId, lectureText: form.lectureText }),
    })
    setSaving(false)
    setSaveMsg('Saqlandi!')
    setTimeout(() => setSaveMsg(''), 2000)
  }

  // ── Question modal helpers ──
  const openNewQ = () => {
    setEditingQ(null)
    setQForm({ text: '', options: ['', '', '', ''], correctIndex: 0, explanation: '' })
    setShowQModal(true)
  }

  const openEditQ = (q: Question) => {
    setEditingQ(q)
    setQForm({
      text: q.text,
      options: [...q.options, ...Array(4).fill('')].slice(0, Math.max(q.options.length, 4)),
      correctIndex: q.correctIndex,
      explanation: q.explanation ?? '',
    })
    setShowQModal(true)
  }

  const addOption = () => setQForm((p) => ({ ...p, options: [...p.options, ''] }))
  const removeOption = (i: number) =>
    setQForm((p) => ({
      ...p,
      options: p.options.filter((_, idx) => idx !== i),
      correctIndex: p.correctIndex >= i && p.correctIndex > 0 ? p.correctIndex - 1 : p.correctIndex,
    }))

  const handleSaveQ = async () => {
    const opts = qForm.options.filter((o) => o.trim() !== '')
    if (!qForm.text.trim() || opts.length < 2) return
    setQSaving(true)

    if (editingQ) {
      await fetch('/api/admin/questions', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: editingQ.id,
          text: qForm.text,
          options: opts,
          correctIndex: qForm.correctIndex,
          explanation: qForm.explanation,
        }),
      })
    } else {
      await fetch('/api/admin/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lessonId,
          topicNumber: lesson?.topicNumber ?? 1,
          text: qForm.text,
          options: opts,
          correctIndex: qForm.correctIndex,
          explanation: qForm.explanation,
        }),
      })
    }

    setQSaving(false)
    setShowQModal(false)
    const qRes = await fetch(`/api/admin/questions?lessonId=${lessonId}`).then((r) => r.json())
    setQuestions(qRes.questions ?? [])
  }

  const handleDeleteQ = async (id: string) => {
    if (!confirm('Bu savolni o\'chirishni tasdiqlaysizmi?')) return
    await fetch('/api/admin/questions', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    setQuestions((p) => p.filter((q) => q.id !== id))
  }

  if (loading) {
    return (
      <div className="p-6 max-w-4xl mx-auto space-y-4">
        {Array(3).fill(0).map((_, i) => <div key={i} className="h-20 rounded-xl shimmer" />)}
      </div>
    )
  }

  if (!lesson) {
    return (
      <div className="p-6 text-center">
        <p className="text-text-muted mb-4">Mavzu topilmadi</p>
        <Link href="/admin/courses"><Button variant="secondary">Orqaga</Button></Link>
      </div>
    )
  }

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'info', label: 'Asosiy ma\'lumot', icon: <BookOpen size={14} /> },
    { id: 'lecture', label: 'Ma\'ruza matni', icon: <BookOpen size={14} /> },
    { id: 'questions', label: `Testlar (${questions.length})`, icon: <ClipboardList size={14} /> },
  ]

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/courses">
          <Button variant="ghost" size="sm">
            <ArrowLeft size={14} />
            Orqaga
          </Button>
        </Link>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <Badge variant="blue">{lesson.topicNumber}-mavzu</Badge>
            <h1 className="text-xl font-bold font-display text-text-primary truncate">{lesson.title}</h1>
          </div>
        </div>
        {saveMsg && (
          <span className="flex items-center gap-1.5 text-sm text-emerald-400">
            <Check size={14} />{saveMsg}
          </span>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-surface-2 rounded-xl mb-6 border border-border">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              'flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all',
              tab === t.id
                ? 'bg-surface text-text-primary shadow-sm border border-border'
                : 'text-text-muted hover:text-text-secondary'
            )}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Tab: Info ── */}
      {tab === 'info' && (
        <Card>
          <CardHeader>
            <h2 className="font-semibold text-text-primary font-display">Mavzu ma'lumotlari</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">Mavzu raqami</label>
                  <input
                    type="number"
                    value={form.topicNumber}
                    onChange={(e) => setForm((p) => ({ ...p, topicNumber: e.target.value }))}
                    className="w-full px-3 py-2 bg-surface-2 border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">Tartib raqami</label>
                  <input
                    type="number"
                    value={form.order}
                    onChange={(e) => setForm((p) => ({ ...p, order: e.target.value }))}
                    className="w-full px-3 py-2 bg-surface-2 border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">Mavzu nomi <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                  className="w-full px-3 py-2 bg-surface-2 border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">Slug</label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => setForm((p) => ({ ...p, slug: e.target.value }))}
                  className="w-full px-3 py-2 bg-surface-2 border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-blue-500/50 transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">Tavsif</label>
                <input
                  type="text"
                  value={form.description}
                  onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                  className="w-full px-3 py-2 bg-surface-2 border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">Video URL (YouTube Embed)</label>
                <input
                  type="text"
                  value={form.videoUrl}
                  onChange={(e) => setForm((p) => ({ ...p, videoUrl: e.target.value }))}
                  placeholder="https://www.youtube.com/embed/VIDEO_ID"
                  className="w-full px-3 py-2 bg-surface-2 border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-blue-500/50 transition-colors font-mono"
                />
                <p className="mt-1 text-xs text-text-muted">
                  YouTube video linkini embed formatiga o'tkazish:
                  <span className="text-blue-400 ml-1">youtube.com/watch?v=ID → youtube.com/embed/ID</span>
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">Davomiyligi</label>
                <input
                  type="text"
                  value={form.videoDuration}
                  onChange={(e) => setForm((p) => ({ ...p, videoDuration: e.target.value }))}
                  placeholder="1:30:00"
                  className="w-full px-3 py-2 bg-surface-2 border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>

              <div className="flex justify-end pt-2">
                <Button onClick={handleSaveInfo} loading={saving}>
                  <Save size={14} />
                  Saqlash
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* ── Tab: Lecture ── */}
      {tab === 'lecture' && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-text-primary font-display">Ma'ruza matni (Markdown)</h2>
              <div className="flex items-center gap-2">
                {saveMsg && <span className="text-sm text-emerald-400 flex items-center gap-1"><Check size={13} />{saveMsg}</span>}
                <Button onClick={handleSaveLecture} loading={saving} size="sm">
                  <Save size={13} />
                  Saqlash
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-3 p-3 bg-blue-500/5 border border-blue-500/20 rounded-xl">
              <p className="text-xs text-blue-400 font-medium mb-1">Markdown qo'llanmasi:</p>
              <div className="text-xs text-text-muted grid grid-cols-2 gap-x-6 gap-y-1">
                <span><code className="text-blue-400"># Sarlavha 1</code> — katta sarlavha</span>
                <span><code className="text-blue-400">## Sarlavha 2</code> — o'rta sarlavha</span>
                <span><code className="text-blue-400">**qalin**</code> — qalin matn</span>
                <span><code className="text-blue-400">- element</code> — ro'yxat</span>
                <span><code className="text-blue-400">```kod```</code> — kod bloki</span>
                <span><code className="text-blue-400">&gt; iqtibos</code> — iqtibos</span>
              </div>
            </div>
            <textarea
              value={form.lectureText}
              onChange={(e) => setForm((p) => ({ ...p, lectureText: e.target.value }))}
              rows={30}
              className="w-full px-4 py-3 bg-surface-2 border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-blue-500/50 transition-colors font-mono resize-y leading-relaxed"
              placeholder="# Mavzu nomi&#10;&#10;## Kirish&#10;&#10;Ma'ruza matni shu yerda..."
            />
          </CardContent>
        </Card>
      )}

      {/* ── Tab: Questions ── */}
      {tab === 'questions' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-text-secondary text-sm">
              {questions.length} ta savol · o'tish uchun 60% kerak
            </p>
            <Button onClick={openNewQ}>
              <Plus size={14} />
              Yangi savol
            </Button>
          </div>

          {questions.length === 0 ? (
            <Card className="p-12 text-center">
              <ClipboardList size={32} className="text-text-muted mx-auto mb-3" />
              <p className="text-text-muted mb-4">Hali savol qo'shilmagan</p>
              <Button onClick={openNewQ}>
                <Plus size={14} />
                Birinchi savolni qo'shish
              </Button>
            </Card>
          ) : (
            <div className="space-y-3">
              {questions.map((q, idx) => (
                <Card key={q.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-xs font-bold text-text-muted shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-primary mb-2">{q.text}</p>
                      <div className="grid grid-cols-2 gap-1.5">
                        {q.options.map((opt, i) => (
                          <div
                            key={i}
                            className={cn(
                              'flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs border',
                              i === q.correctIndex
                                ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400'
                                : 'border-border bg-surface-2 text-text-secondary'
                            )}
                          >
                            <span className="font-bold shrink-0">{OPTION_LABELS[i]}.</span>
                            <span className="truncate">{opt}</span>
                            {i === q.correctIndex && <Check size={11} className="shrink-0 ml-auto" />}
                          </div>
                        ))}
                      </div>
                      {q.explanation && (
                        <p className="mt-2 text-xs text-text-muted italic">
                          <AlertCircle size={11} className="inline mr-1" />
                          {q.explanation}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <Button variant="secondary" size="sm" onClick={() => openEditQ(q)}>
                        <Pencil size={12} />
                      </Button>
                      <Button variant="danger" size="sm" onClick={() => handleDeleteQ(q.id)}>
                        <Trash2 size={12} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Question Modal ── */}
      <Modal
        open={showQModal}
        onClose={() => setShowQModal(false)}
        title={editingQ ? 'Savolni tahrirlash' : 'Yangi savol qo\'shish'}
        size="lg"
      >
        <div className="space-y-4">
          {/* Question text */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1.5">
              Savol matni <span className="text-red-400">*</span>
            </label>
            <textarea
              value={qForm.text}
              onChange={(e) => setQForm((p) => ({ ...p, text: e.target.value }))}
              rows={3}
              placeholder="Savol matnini kiriting..."
              className="w-full px-3 py-2 bg-surface-2 border border-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
            />
          </div>

          {/* Options */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-text-secondary">
                Javob variantlari <span className="text-red-400">*</span>
                <span className="text-text-muted font-normal ml-1">(kamida 2 ta)</span>
              </label>
              {qForm.options.length < 6 && (
                <button onClick={addOption} className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1">
                  <Plus size={12} />Variant qo'shish
                </button>
              )}
            </div>
            <div className="space-y-2">
              {qForm.options.map((opt, i) => (
                <div key={i} className="flex items-center gap-2">
                  <button
                    onClick={() => setQForm((p) => ({ ...p, correctIndex: i }))}
                    className={cn(
                      'w-8 h-8 rounded-lg border flex items-center justify-center text-xs font-bold shrink-0 transition-all',
                      qForm.correctIndex === i
                        ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                        : 'bg-surface-2 border-border text-text-muted hover:border-blue-500/40'
                    )}
                    title="To'g'ri javob sifatida belgilash"
                  >
                    {qForm.correctIndex === i ? <Check size={13} /> : OPTION_LABELS[i]}
                  </button>
                  <input
                    type="text"
                    value={opt}
                    onChange={(e) => {
                      const newOpts = [...qForm.options]
                      newOpts[i] = e.target.value
                      setQForm((p) => ({ ...p, options: newOpts }))
                    }}
                    placeholder={`${OPTION_LABELS[i]} variantini kiriting`}
                    className="flex-1 px-3 py-2 bg-surface-2 border border-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                  {qForm.options.length > 2 && (
                    <button
                      onClick={() => removeOption(i)}
                      className="p-2 rounded-lg text-text-muted hover:text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-text-muted">
              ✓ belgisini bosib to'g'ri javobni belgilang
            </p>
          </div>

          {/* Explanation */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1.5">
              Tushuntirish <span className="text-text-muted font-normal">(ixtiyoriy)</span>
            </label>
            <input
              type="text"
              value={qForm.explanation}
              onChange={(e) => setQForm((p) => ({ ...p, explanation: e.target.value }))}
              placeholder="Nima uchun bu javob to'g'ri..."
              className="w-full px-3 py-2 bg-surface-2 border border-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-blue-500/50 transition-colors"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2 border-t border-border">
            <Button variant="secondary" onClick={() => setShowQModal(false)}>Bekor qilish</Button>
            <Button
              onClick={handleSaveQ}
              loading={qSaving}
              disabled={!qForm.text.trim() || qForm.options.filter((o) => o.trim()).length < 2}
            >
              <Save size={14} />
              {editingQ ? 'Yangilash' : 'Qo\'shish'}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
