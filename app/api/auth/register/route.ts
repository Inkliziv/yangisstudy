import { NextRequest, NextResponse } from 'next/server'
import { createUser } from '@/lib/store'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, password, studentId, group } = body

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Ism, email va parol majburiy" }, { status: 400 })
    }

    const user = await createUser({ name, email, password, studentId, group })
    const { password: _, ...safeUser } = user
    return NextResponse.json({ user: safeUser }, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message ?? 'Server xatosi' }, { status: 400 })
  }
}
