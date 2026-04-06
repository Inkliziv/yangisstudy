import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, Users, BookOpen, BarChart2, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: <LayoutDashboard size={16} />, exact: true },
  { href: '/admin/students', label: 'Talabalar', icon: <Users size={16} /> },
  { href: '/admin/courses', label: 'Kurslar', icon: <BookOpen size={16} /> },
  { href: '/admin/analytics', label: 'Tahlil', icon: <BarChart2 size={16} /> },
]

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== 'admin') redirect('/')

  return (
    <div className="min-h-screen flex">
      {/* Admin sidebar */}
      <aside className="w-56 shrink-0 border-r border-border bg-surface sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto hidden md:block">
        <div className="p-4">
          <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3 px-2">Admin Panel</p>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-text-secondary hover:text-text-primary hover:bg-surface-2 transition-colors"
              >
                <span className="text-text-muted">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        {children}
      </div>
    </div>
  )
}
