export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getAllUsers, getAllProgress, getStudentGrade, deleteUser } from '@/lib/store'

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const users = (await getAllUsers()).filter((u) => u.role === 'student')
  const allProgress = await getAllProgress()

  const students = await Promise.all(
    users.map(async (u) => {
      const prog = allProgress.find((p) => p.userId === u.id && p.courseId === 'raqamli-texnologiyalar')
      const { grade, percentage, completedTopics } = await getStudentGrade(u.id)
      return {
        id: u.id,
        name: u.name,
        email: u.email,
        studentId: u.studentId,
        group: u.group,
        createdAt: u.createdAt,
        completedLessons: prog?.completedLessons ?? 0,
        overallPercentage: percentage,
        grade,
        completedTopics,
        lastActivityAt: prog?.lastActivityAt,
      }
    })
  )

  return NextResponse.json({ students })
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { id } = await req.json()
  if (!id) return NextResponse.json({ error: 'ID majburiy' }, { status: 400 })

  await deleteUser(id)
  return NextResponse.json({ success: true })
}
