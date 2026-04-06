import Link from 'next/link'
import { BookOpen, Github, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <BookOpen size={16} className="text-white" />
              </div>
              <span className="text-xl font-bold font-display text-gradient">S-STUDY</span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              TATU talabalari uchun raqamli texnologiyalar bo'yicha zamonaviy online ta'lim platformasi.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-text-muted">
              <MapPin size={14} />
              <span>Toshkent, O'zbekiston</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Platformа</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Bosh sahifa' },
                { href: '/course/raqamli-texnologiyalar', label: 'Kurs' },
                { href: '/auth/login', label: 'Kirish' },
                { href: '/auth/register', label: "Ro'yxatdan o'tish" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Aloqa</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@sstudy.uz"
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-blue-400 transition-colors"
                >
                  <Mail size={14} />
                  info@sstudy.uz
                </a>
              </li>
              <li>
                <a
                  href="https://tatu.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-blue-400 transition-colors"
                >
                  tatu.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} S-STUDY. TATU. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-xs text-text-muted">
            Raqamli Texnologiyalar va Innovatsiyalar kursi
          </p>
        </div>
      </div>
    </footer>
  )
}
