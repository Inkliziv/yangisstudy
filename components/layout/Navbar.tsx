'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { BookOpen, LayoutDashboard, LogOut, User, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const isAdmin = (session?.user as any)?.role === 'admin'

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-glow-blue">
              <BookOpen size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold font-display text-gradient">S-STUDY</span>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={cn(
                'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                pathname === '/'
                  ? 'bg-blue-500/10 text-blue-400'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-2'
              )}
            >
              Bosh sahifa
            </Link>
            <Link
              href="/course/raqamli-texnologiyalar"
              className={cn(
                'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                pathname.startsWith('/course')
                  ? 'bg-blue-500/10 text-blue-400'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-2'
              )}
            >
              Kurs
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5',
                  pathname.startsWith('/admin')
                    ? 'bg-purple-500/10 text-purple-400'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-2'
                )}
              >
                <LayoutDashboard size={14} />
                Admin
              </Link>
            )}
          </nav>

          {/* User menu */}
          <div className="flex items-center gap-3">
            {session ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-surface-2 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                    {session.user?.name?.[0]?.toUpperCase() ?? 'U'}
                  </div>
                  <span className="hidden sm:block text-sm text-text-primary max-w-[120px] truncate">
                    {session.user?.name}
                  </span>
                  <ChevronDown size={14} className="text-text-muted" />
                </button>

                {dropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
                    <div className="absolute right-0 top-full mt-2 w-48 bg-surface border border-border rounded-xl shadow-card z-20 overflow-hidden">
                      <div className="px-4 py-3 border-b border-border">
                        <p className="text-sm font-medium text-text-primary truncate">{session.user?.name}</p>
                        <p className="text-xs text-text-muted truncate">{session.user?.email}</p>
                      </div>
                      <div className="p-1">
                        <Link
                          href="/profile"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-2 rounded-lg transition-colors"
                        >
                          <User size={14} />
                          Profil
                        </Link>
                        <button
                          onClick={() => { setDropdownOpen(false); signOut({ callbackUrl: '/' }) }}
                          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                        >
                          <LogOut size={14} />
                          Chiqish
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/auth/login"
                  className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-2 rounded-xl transition-colors"
                >
                  Kirish
                </Link>
                <Link
                  href="/auth/register"
                  className="px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all"
                >
                  Ro'yxatdan o'tish
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
