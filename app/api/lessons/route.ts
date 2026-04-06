import { NextRequest, NextResponse } from 'next/server'
import { getStoreLessons } from '@/lib/store'

export async function GET(req: NextRequest) {
  const lessons = getStoreLessons()
  return NextResponse.json({ lessons })
}
