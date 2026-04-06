import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getStoreQuestions, createQuestion, updateQuestion, deleteQuestion } from '@/lib/store'

function isAdmin(session: any) {
  return session?.user?.role === 'admin'
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session || !isAdmin(session)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const lessonId = req.nextUrl.searchParams.get('lessonId') ?? undefined
  return NextResponse.json({ questions: getStoreQuestions(lessonId) })
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session || !isAdmin(session)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const body = await req.json()
  const { lessonId, topicNumber, text, options, correctIndex, explanation } = body

  if (!lessonId || !text || !options || options.length < 2) {
    return NextResponse.json({ error: "LessonId, savol va kamida 2 ta variant majburiy" }, { status: 400 })
  }

  const question = createQuestion({
    lessonId,
    topicNumber: Number(topicNumber) || 1,
    text,
    options,
    correctIndex: Number(correctIndex) || 0,
    explanation: explanation ?? '',
  })

  return NextResponse.json({ question }, { status: 201 })
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session || !isAdmin(session)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const body = await req.json()
  const { id, ...updates } = body
  if (!id) return NextResponse.json({ error: 'ID majburiy' }, { status: 400 })

  const question = updateQuestion(id, {
    ...updates,
    correctIndex: Number(updates.correctIndex),
  })
  if (!question) return NextResponse.json({ error: 'Savol topilmadi' }, { status: 404 })
  return NextResponse.json({ question })
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session || !isAdmin(session)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const { id } = await req.json()
  if (!id) return NextResponse.json({ error: 'ID majburiy' }, { status: 400 })

  deleteQuestion(id)
  return NextResponse.json({ success: true })
}
