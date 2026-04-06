import { cn } from '@/lib/utils'

interface ProgressProps {
  value: number
  max?: number
  className?: string
  barClassName?: string
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function Progress({
  value,
  max = 100,
  className,
  barClassName,
  showLabel,
  size = 'md',
}: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))

  const heights = { sm: 'h-1', md: 'h-2', lg: 'h-3' }

  return (
    <div className={cn('w-full', className)}>
      <div className={cn('w-full bg-surface-3 rounded-full overflow-hidden', heights[size])}>
        <div
          className={cn(
            'h-full rounded-full transition-all duration-500 bg-gradient-to-r from-blue-500 to-purple-500',
            barClassName
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && (
        <p className="mt-1 text-xs text-text-muted text-right">{Math.round(pct)}%</p>
      )}
    </div>
  )
}
