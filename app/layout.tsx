import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'S-STUDY — Raqamli Texnologiyalar kursi',
    template: '%s | S-STUDY',
  },
  description:
    "TATU talabalari uchun Raqamli Texnologiyalar va Innovatsiyalar bo'yicha online ta'lim platformasi. 15 mavzu, video darslar, ma'ruzalar va testlar.",
  keywords: ['TATU', 'S-Study', 'Raqamli texnologiyalar', 'online kurs', "ta'lim"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className="dark">
      <body className={`${jakarta.variable} ${grotesk.variable} font-sans bg-background text-text-primary min-h-screen flex flex-col`}>
        <Providers>
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
