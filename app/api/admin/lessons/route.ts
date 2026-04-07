export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getStoreLessons, createLesson, updateLesson, deleteLesson } from '@/lib/store'

function isAdmin(session: any) {
  return session?.user?.role === 'admin'
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session || !isAdmin(session)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  return NextResponse.json({ lessons: await getStoreLessons() })
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session || !isAdmin(session)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const body = await req.json()
  const { topicNumber, title, slug, description, videoUrl, videoDuration, lectureText, order } = body

  if (!title || !slug) return NextResponse.json({ error: 'Title va slug majburiy' }, { status: 400 })

  const lesson = await createLesson({
    topicNumber: Number(topicNumber) || 1,
    title,
    slug: slug.toLowerCase().replace(/\s+/g, '-'),
    description: description ?? '',
    videoUrl: videoUrl ?? 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: videoDuration ?? '1:00:00',
    lectureText: lectureText ?? `# ${title}\n\nMa'ruza matni shu yerda bo'ladi.`,
    order: Number(order) || 1,
  })

  return NextResponse.json({ lesson }, { status: 201 })
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session || !isAdmin(session)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const body = await req.json()
  const { id, ...updates } = body
  if (!id) return NextResponse.json({ error: 'ID majburiy' }, { status: 400 })

  const lesson = await updateLesson(id, updates)
  if (!lesson) return NextResponse.json({ error: 'Dars topilmadi' }, { status: 404 })
  return NextResponse.json({ lesson })
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session || !isAdmin(session)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const { id } = await req.json()
  if (!id) return NextResponse.json({ error: 'ID majburiy' }, { status: 400 })

  await deleteLesson(id)
  return NextResponse.json({ success: true })
}
