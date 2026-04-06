import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl font-bold font-display text-gradient mb-4">404</p>
        <h1 className="text-2xl font-bold text-text-primary mb-2">Sahifa topilmadi</h1>
        <p className="text-text-secondary mb-8">Siz qidirayotgan sahifa mavjud emas.</p>
        <Link href="/">
          <Button>Bosh sahifaga qaytish</Button>
        </Link>
      </div>
    </div>
  )
}
