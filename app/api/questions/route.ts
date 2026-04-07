import { NextRequest, NextResponse } from 'next/server'
import { getStoreQuestions } from '@/lib/store'

export async function GET(req: NextRequest) {
  const lessonId = req.nextUrl.searchParams.get('lessonId') ?? undefined
  const questions = await getStoreQuestions(lessonId)
  return NextResponse.json({ questions })
}
