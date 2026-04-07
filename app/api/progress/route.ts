export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getProgress, updateLessonProgress } from '@/lib/store'

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const userId = (session.user as any).id
  const courseId = req.nextUrl.searchParams.get('courseId') ?? 'raqamli-texnologiyalar'

  const progress = await getProgress(userId, courseId)
  return NextResponse.json({ progress })
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const userId = (session.user as any).id
  const body = await req.json()
  const { courseId, lessonId, topicNumber, videoWatched, lectureRead } = body

  const updated = await updateLessonProgress(userId, courseId, {
    lessonId,
    topicNumber,
    ...(videoWatched !== undefined && { videoWatched }),
    ...(lectureRead !== undefined && { lectureRead }),
  })

  return NextResponse.json({ progress: updated })
}
