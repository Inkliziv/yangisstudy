'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { BookOpen, LayoutDashboard, LogOut, User, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isAdmin = (session?.user as any)?.role === 'admin'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled
          ? 'glass border-b border-border shadow-card'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600
                            flex items-center justify-center shadow-glow-blue
                            group-hover:shadow-glow-purple transition-shadow duration-300">
              <BookOpen size={15} className="text-white" />
            </div>
            <span className="text-xl font-bold font-display text-gradient">S-STUDY</span>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: '/',                               label: 'Bosh sahifa', match: pathname === '/' },
              { href: '/course/raqamli-texnologiyalar',  label: 'Kurs',        match: pathname.startsWith('/course') },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  link.match
                    ? 'text-blue-400'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-2'
                )}
              >
                {link.label}
                {link.match && (
                  <span className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full
                                   bg-gradient-to-r from-blue-500 to-violet-500" />
                )}
              </Link>
            ))}

            {isAdmin && (
              <Link
                href="/admin"
                className={cn(
                  'relative px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5',
                  pathname.startsWith('/admin')
                    ? 'text-violet-400'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-2'
                )}
              >
                <LayoutDashboard size={14} />
                Admin
                {pathname.startsWith('/admin') && (
                  <span className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full
                                   bg-gradient-to-r from-violet-500 to-purple-500" />
                )}
              </Link>
            )}
          </nav>

          {/* User menu */}
          <div className="flex items-center gap-2">
            {session ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl
                             hover:bg-surface-2 transition-colors focus:outline-none
                             focus:ring-2 focus:ring-blue-500/30"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-violet-600
                                  flex items-center justify-center text-white text-xs font-bold
                                  ring-2 ring-blue-500/20">
                    {session.user?.name?.[0]?.toUpperCase() ?? 'U'}
                  </div>
                  <span className="hidden sm:block text-sm text-text-primary max-w-[120px] truncate">
                    {session.user?.name}
                  </span>
                  <ChevronDown
                    size={14}
                    className={cn(
                      'text-text-muted transition-transform duration-200',
                      dropdownOpen && 'rotate-180'
                    )}
                  />
                </button>

                {dropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
                    <div className="absolute right-0 top-full mt-2 w-52
                                    bg-surface border border-border rounded-2xl
                                    shadow-card z-20 overflow-hidden animate-scale-in">
                      <div className="px-4 py-3 border-b border-border bg-surface-2">
                        <p className="text-sm font-semibold text-text-primary truncate">{session.user?.name}</p>
                        <p className="text-xs text-text-muted truncate mt-0.5">{session.user?.email}</p>
                      </div>
                      <div className="p-1.5">
                        <Link
                          href="/profile"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2.5 text-sm
                                     text-text-secondary hover:text-text-primary
                                     hover:bg-surface-2 rounded-xl transition-colors"
                        >
                          <User size={14} />
                          Profil
                        </Link>
                        <button
                          onClick={() => { setDropdownOpen(false); signOut({ callbackUrl: '/' }) }}
                          className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm
                                     text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
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
                  className="px-3 py-2 text-sm text-text-secondary
                             hover:text-text-primary hover:bg-surface-2
                             rounded-xl transition-colors"
                >
                  Kirish
                </Link>
                <Link
                  href="/auth/register"
                  className="px-4 py-2 text-sm font-medium rounded-xl
                             bg-gradient-to-r from-blue-600 to-violet-600
                             hover:from-blue-500 hover:to-violet-500
                             text-white shadow-glow-blue hover:shadow-glow-purple
                             transition-all duration-200"
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
