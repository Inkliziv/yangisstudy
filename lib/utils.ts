import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function gradeFromPercentage(pct: number): 'A' | 'B' | 'C' | 'D' | 'F' {
  if (pct >= 90) return 'A'
  if (pct >= 75) return 'B'
  if (pct >= 60) return 'C'
  if (pct >= 50) return 'D'
  return 'F'
}

export function gradeColor(grade: string): string {
  const colors: Record<string, string> = {
    A: 'text-emerald-400',
    B: 'text-blue-400',
    C: 'text-yellow-400',
    D: 'text-orange-400',
    F: 'text-red-400',
  }
  return colors[grade] ?? 'text-slate-400'
}

export function gradeLabel(grade: string): string {
  const labels: Record<string, string> = {
    A: "A'lo (90-100%)",
    B: "Yaxshi (75-89%)",
    C: "Qoniqarli (60-74%)",
    D: "O'rtacha (50-59%)",
    F: "Qoniqarsiz (<50%)",
  }
  return labels[grade] ?? grade
}

export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('uz-UZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString('uz-UZ', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function scoreLabel(pct: number): string {
  if (pct >= 90) return "A'lo"
  if (pct >= 75) return 'Yaxshi'
  if (pct >= 60) return 'Qoniqarli'
  if (pct >= 50) return "O'rtacha"
  return 'Qoniqarsiz'
}

export function passedColor(passed: boolean): string {
  return passed ? 'text-emerald-400' : 'text-red-400'
}

export function truncate(str: string, max: number): string {
  return str.length > max ? str.slice(0, max) + '…' : str
}
