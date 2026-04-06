import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { saveTestAttempt, updateLessonProgress, getTestAttempts } from '@/lib/store'

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const userId = (session.user as any).id
  const body = await req.json()
  const { courseId, lessonId, topicNumber, score, percentage, passed, totalQuestions, answers } = body

  // Save attempt
  const attempt = saveTestAttempt({
    userId,
    lessonId,
    topicNumber,
    answers: answers ?? [],
    score,
    totalQuestions,
    percentage,
    passed,
    completedAt: new Date().toISOString(),
    timeSpentSeconds: body.timeSpentSeconds ?? 0,
  })

  // Get previous best
  const prevAttempts = getTestAttempts(userId, lessonId)
  const bestPercentage = Math.max(...prevAttempts.map((a) => a.percentage))

  // Update lesson progress with best score
  updateLessonProgress(userId, courseId, {
    lessonId,
    topicNumber,
    testPassed: passed || prevAttempts.some((a) => a.passed),
    testScore: score,
    testPercentage: bestPercentage,
    attempts: prevAttempts.length,
    ...(passed && { completedAt: new Date().toISOString() }),
  })

  return NextResponse.json({ attempt })
}
