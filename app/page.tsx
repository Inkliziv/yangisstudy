import Link from 'next/link'
import {
  BookOpen, Play, ClipboardList, Trophy, Users, Star,
  ArrowRight, CheckCircle2, Zap, Shield, Globe, Brain,
  ChevronRight, Layers, GraduationCap
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { LESSONS } from '@/lib/data'

export default function HomePage() {
  const features = [
    {
      icon: <Play size={22} className="text-blue-400" />,
      iconBg: 'from-blue-500/20 to-blue-600/10 border-blue-500/20',
      title: 'Video darslar',
      desc: '15 ta professional video ma\'ruza, jami 22+ soat kontent',
    },
    {
      icon: <BookOpen size={22} className="text-violet-400" />,
      iconBg: 'from-violet-500/20 to-violet-600/10 border-violet-500/20',
      title: "Ma'ruza matnlari",
      desc: "Har bir mavzu bo'yicha batafsil ma'ruza matni va misollar",
    },
    {
      icon: <ClipboardList size={22} className="text-cyan-400" />,
      iconBg: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/20',
      title: 'Interaktiv testlar',
      desc: 'Har mavzudan 5 savol, natijalar va tushuntirishlar bilan',
    },
    {
      icon: <Trophy size={22} className="text-amber-400" />,
      iconBg: 'from-amber-500/20 to-amber-600/10 border-amber-500/20',
      title: 'Sertifikat',
      desc: "Kursni muvaffaqiyatli tugatgach elektron sertifikat olasiz",
    },
  ]

  const highlights = [
    { text: 'Raqamli iqtisodiyot va AI asoslari',    icon: <Brain size={14} className="text-blue-400" /> },
    { text: 'Blokcheyn va kriptovalyutalar',           icon: <Layers size={14} className="text-purple-400" /> },
    { text: 'Bulut hisoblash va kiberxavfsizlik',      icon: <Shield size={14} className="text-cyan-400" /> },
    { text: 'Big Data va IoT texnologiyalari',         icon: <Zap size={14} className="text-amber-400" /> },
    { text: 'Web va mobil dasturlash',                 icon: <Globe size={14} className="text-emerald-400" /> },
    { text: 'Kvant hisoblash va metaverse',            icon: <Star size={14} className="text-pink-400" /> },
  ]

  const stats = [
    { icon: <BookOpen size={20} className="text-blue-400" />,   value: '15',   label: 'Mavzu',      color: 'from-blue-500/10 to-blue-600/5',    border: 'border-blue-500/15' },
    { icon: <Play size={20} className="text-violet-400" />,     value: '22+',  label: 'Soat video', color: 'from-violet-500/10 to-violet-600/5', border: 'border-violet-500/15' },
    { icon: <ClipboardList size={20} className="text-cyan-400"/>,value: '75',  label: 'Test savoli',color: 'from-cyan-500/10 to-cyan-600/5',     border: 'border-cyan-500/15' },
    { icon: <GraduationCap size={20} className="text-amber-400"/>,value: 'TATU',label: 'Universiteti',color: 'from-amber-500/10 to-amber-600/5', border: 'border-amber-500/15' },
  ]

  const techCards = [
    { icon: <Shield size={28} className="text-blue-400" />,   title: 'Kiberxavfsizlik',   bg: 'from-blue-500/15 to-blue-600/5',    border: 'border-blue-500/20' },
    { icon: <Globe size={28} className="text-violet-400" />,  title: 'Web texnologiyalar', bg: 'from-violet-500/15 to-violet-600/5',border: 'border-violet-500/20' },
    { icon: <Brain size={28} className="text-amber-400" />,   title: "Sun'iy intellekt",   bg: 'from-amber-500/15 to-amber-600/5',  border: 'border-amber-500/20' },
    { icon: <Trophy size={28} className="text-emerald-400" />,title: 'Sertifikat',         bg: 'from-emerald-500/15 to-emerald-600/5',border: 'border-emerald-500/20' },
  ]

  return (
    <div className="min-h-screen">

      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden bg-grid py-28 px-4">
        {/* Animated orbs */}
        <div className="orb orb-blue  animate-float        w-[500px] h-[500px] -top-32  -left-20" />
        <div className="orb orb-purple animate-float-delayed w-[400px] h-[400px] -bottom-20 -right-20" />
        <div className="orb orb-cyan  animate-float-slow   w-[300px] h-[300px]  top-1/2  left-1/2  -translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                          bg-blue-500/10 border border-blue-500/20 text-blue-400
                          text-sm font-medium mb-8 animate-fade-in">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <Star size={12} />
            TATU — Raqamli Ta'lim Platformasi
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6 animate-slide-up">
            <span className="text-text-primary">Raqamli Texnologiyalar</span>
            <br />
            <span className="text-gradient">va Innovatsiyalar</span>
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in">
            TATU talabalari uchun mo'ljallangan zamonaviy kurs. Sun'iy intellekt,
            blokcheyn, bulut hisoblash va boshqa <strong className="text-text-primary">15 ta muhim mavzu</strong>ni o'rganing.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link href="/course/raqamli-texnologiyalar">
              <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-shadow">
                Kursni boshlash
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto group">
                Bepul ro'yxatdan o'tish
                <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className={`relative glass rounded-2xl p-5 text-center border ${s.border} bg-gradient-to-br ${s.color} card-hover`}
              >
                <div className="flex justify-center mb-3">{s.icon}</div>
                <p className="text-3xl font-bold font-display text-gradient mb-1">{s.value}</p>
                <p className="text-xs text-text-muted font-medium uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── FEATURES ───────────── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="purple" className="mb-4 inline-flex">Platforma imkoniyatlari</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-primary mb-4">
              O'rganish qulay va samarali
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              Har bir o'rganuvchi uchun to'liq ta'lim ekotizimi
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative bg-surface rounded-2xl border border-border p-6 card-hover"
              >
                {/* Top gradient line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.iconBg} border flex items-center justify-center mb-5`}>
                  {f.icon}
                </div>
                <h3 className="font-semibold text-text-primary mb-2 font-display">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── TOPICS PREVIEW ───────────── */}
      <section className="py-24 px-4 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="orb orb-purple w-[600px] h-[300px] top-0 right-0 opacity-[0.07]" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="cyan" className="mb-4 inline-flex">Kurs tarkibi</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-primary mb-4">
              15 ta Mavzu
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Zamonaviy raqamli texnologiyalarning barcha muhim sohalarini qamrab olgan keng qamrovli kurs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
            {LESSONS.map((lesson) => (
              <div
                key={lesson.id}
                className="group flex items-center gap-3 p-4 rounded-xl bg-surface-2 border border-border
                           hover:border-blue-500/30 hover:bg-surface-3 transition-all duration-200"
              >
                <div className="num-badge w-9 h-9 rounded-lg flex items-center justify-center
                                text-sm font-bold text-blue-400 shrink-0 font-display">
                  {lesson.topicNumber}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-text-primary truncate group-hover:text-blue-300 transition-colors">
                    {lesson.title}
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">{lesson.videoDuration}</p>
                </div>
                <ChevronRight size={14} className="text-text-muted shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/course/raqamli-texnologiyalar">
              <Button variant="secondary" size="lg" className="group">
                Kursni ko'rish
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── HIGHLIGHTS ───────────── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <Badge variant="green" className="mb-5 inline-flex">
                <Zap size={11} />
                Nima o'rganasiz?
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-primary mb-4 leading-tight">
                Kelajak texnologiyalariga
                <span className="text-gradient block">tayyorlaning</span>
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Sanoatda eng zarur bo'lgan raqamli ko'nikmalarni o'zlashtiring va
                raqobatbardosh mutaxassis bo'ling.
              </p>

              <div className="space-y-3 mb-10">
                {highlights.map((h) => (
                  <div key={h.text} className="flex items-center gap-3 group">
                    <div className="w-7 h-7 rounded-lg bg-surface-2 border border-border
                                    flex items-center justify-center shrink-0
                                    group-hover:border-blue-500/30 transition-colors">
                      {h.icon}
                    </div>
                    <span className="text-text-secondary group-hover:text-text-primary transition-colors">
                      {h.text}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/auth/register">
                <Button size="lg" className="shadow-lg shadow-blue-500/20">
                  Hoziroq boshlash
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>

            {/* Right — tech cards */}
            <div className="grid grid-cols-2 gap-4">
              {techCards.map((item, i) => (
                <div
                  key={item.title}
                  className={`relative p-7 rounded-2xl bg-gradient-to-br ${item.bg}
                              border ${item.border} card-hover
                              ${i === 1 ? 'mt-6' : ''} ${i === 3 ? '-mt-6' : ''}`}
                >
                  <div className="mb-4">{item.icon}</div>
                  <p className="text-sm font-semibold text-text-primary font-display">{item.title}</p>
                  <div className="absolute bottom-4 right-4 opacity-10">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-surface" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="orb orb-blue   w-[400px] h-[400px] -top-20  left-1/2 -translate-x-1/2 opacity-[0.12]" />
        <div className="orb orb-purple w-[300px] h-[300px]  bottom-0 left-1/4              opacity-[0.08]" />

        <div className="relative max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                          bg-emerald-500/10 border border-emerald-500/20 text-emerald-400
                          text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Bepul • Hoziroq boshlash mumkin
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-primary mb-5">
            Bugun boshlang,
            <span className="text-gradient"> kelajakni quring</span>
          </h2>
          <p className="text-text-secondary mb-10 text-lg leading-relaxed">
            Bepul ro'yxatdan o'ting va raqamli texnologiyalar dunyosiga kiring.
            15 ta mavzu, 22+ soat video va interaktiv testlar sizni kutmoqda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-blue-500/25">
                Bepul ro'yxatdan o'tish
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/course/raqamli-texnologiyalar">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Kursni ko'rish
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
