'use client'

import { useEffect, useState } from 'react'
import { Plus, Pencil, Trash2, ChevronRight, BookOpen, ClipboardList, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import Modal from '@/components/ui/Modal'
import { Lesson } from '@/types'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function AdminCoursesPage() {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [loading, setLoading] = useState(true)

  // New lesson modal
  const [showNew, setShowNew] = useState(false)
  const [saving, setSaving] = useState(false)
  const [newForm, setNewForm] = useState({
    topicNumber: '',
    title: '',
    slug: '',
    description: '',
    videoUrl: '',
    videoDuration: '',
    order: '',
  })

  const load = () => {
    setLoading(true)
    fetch('/api/admin/lessons')
      .then((r) => r.json())
      .then((d) => { setLessons(d.lessons ?? []); setLoading(false) })
  }

  useEffect(() => { load() }, [])

  const autoSlug = (title: string) =>
    title.toLowerCase().replace(/'/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

  const handleNewChange = (field: string, value: string) => {
    setNewForm((p) => {
      const updated = { ...p, [field]: value }
      if (field === 'title') updated.slug = autoSlug(value)
      if (field === 'topicNumber') updated.order = value
      return updated
    })
  }

  const handleCreate = async () => {
    if (!newForm.title) return
    setSaving(true)
    await fetch('/api/admin/lessons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...newForm,
        topicNumber: Number(newForm.topicNumber) || lessons.length + 1,
        order: Number(newForm.order) || lessons.length + 1,
        lectureText: `# ${newForm.title}\n\nMa'ruza matni shu yerda bo'ladi.`,
      }),
    })
    setSaving(false)
    setShowNew(false)
    setNewForm({ topicNumber: '', title: '', slug: '', description: '', videoUrl: '', videoDuration: '', order: '' })
    load()
  }

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`"${title}" darsini o'chirishni tasdiqlaysizmi?\nBu darsga tegishli barcha savollar ham o'chiriladi.`)) return
    await fetch('/api/admin/lessons', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    load()
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold font-display text-text-primary">Kurs boshqaruvi</h1>
          <p className="text-text-secondary text-sm mt-1">{lessons.length} ta mavzu</p>
        </div>
        <Button onClick={() => setShowNew(true)}>
          <Plus size={16} />
          Yangi mavzu
        </Button>
      </div>

      {/* Course info card */}
      <Card className="p-5 mb-6 bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-blue-500/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
            <BookOpen size={20} className="text-blue-400" />
          </div>
          <div>
            <p className="font-bold text-text-primary font-display">Raqamli Texnologiyalar va Innovatsiyalar</p>
            <p className="text-sm text-text-secondary">Asosiy kurs · TATU talabalari uchun</p>
          </div>
          <div className="ml-auto flex gap-4 text-sm text-text-secondary">
            <span className="flex items-center gap-1"><BookOpen size={13} />{lessons.length} mavzu</span>
            <span className="flex items-center gap-1"><ClipboardList size={13} />Har birida testlar</span>
          </div>
        </div>
      </Card>

      {/* Lessons list */}
      <div className="space-y-2">
        {loading
          ? Array(5).fill(0).map((_, i) => <div key={i} className="h-16 rounded-xl shimmer" />)
          : lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl hover:border-border-light transition-colors group"
            >
              {/* Number */}
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-400 shrink-0">
                {lesson.topicNumber}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-text-primary truncate">{lesson.title}</p>
                <div className="flex items-center gap-3 mt-0.5 text-xs text-text-muted">
                  <span className="flex items-center gap-1"><Clock size={10} />{lesson.videoDuration}</span>
                  <span className="truncate max-w-xs">{lesson.description}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <Link href={`/admin/courses/${lesson.id}`}>
                  <Button variant="secondary" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Pencil size={13} />
                    Tahrirlash
                  </Button>
                </Link>
                <Link href={`/admin/courses/${lesson.id}`}>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ClipboardList size={13} />
                    Testlar
                    <ChevronRight size={13} />
                  </Button>
                </Link>
                <Button
                  variant="danger"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleDelete(lesson.id, lesson.title)}
                >
                  <Trash2 size={13} />
                </Button>
              </div>
            </div>
          ))
        }
      </div>

      {/* New lesson modal */}
      <Modal open={showNew} onClose={() => setShowNew(false)} title="Yangi mavzu qo'shish" size="lg">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">Mavzu raqami <span className="text-red-400">*</span></label>
              <input
                type="number"
                value={newForm.topicNumber}
                onChange={(e) => handleNewChange('topicNumber', e.target.value)}
                placeholder={String(lessons.length + 1)}
                className="w-full px-3 py-2 bg-surface-2 border border-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">Davomiyligi</label>
              <input
                type="text"
                value={newForm.videoDuration}
                onChange={(e) => handleNewChange('videoDuration', e.target.value)}
                placeholder="1:30:00"
                className="w-full px-3 py-2 bg-surface-2 border border-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1.5">Mavzu nomi <span className="text-red-400">*</span></label>
            <input
              type="text"
              value={newForm.title}
              onChange={(e) => handleNewChange('title', e.target.value)}
              placeholder="Masalan: Blokcheyn Texnologiyasi"
              className="w-full px-3 py-2 bg-surface-2 border border-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-blue-500/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1.5">Slug (URL)</label>
            <input
              type="text"
              value={newForm.slug}
              onChange={(e) => handleNewChange('slug', e.target.value)}
              placeholder="blokcheyn-texnologiyasi"
              className="w-full px-3 py-2 bg-surface-2 border border-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-blue-500/50 transition-colors font-mono"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1.5">Tavsif</label>
            <input
              type="text"
              value={newForm.description}
              onChange={(e) => handleNewChange('description', e.target.value)}
              placeholder="Qisqacha tavsif..."
              className="w-full px-3 py-2 bg-surface-2 border border-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-blue-500/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1.5">YouTube Video URL</label>
            <input
              type="text"
              value={newForm.videoUrl}
              onChange={(e) => handleNewChange('videoUrl', e.target.value)}
              placeholder="https://www.youtube.com/embed/VIDEO_ID"
              className="w-full px-3 py-2 bg-surface-2 border border-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-blue-500/50 transition-colors font-mono"
            />
            <p className="text-xs text-text-muted mt-1">YouTube Embed URL: youtube.com/embed/VIDEO_ID</p>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Button variant="secondary" onClick={() => setShowNew(false)}>Bekor qilish</Button>
            <Button onClick={handleCreate} loading={saving} disabled={!newForm.title}>
              <Plus size={14} />
              Qo'shish
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
