import Link from 'next/link'
import {
  BookOpen, Play, ClipboardList, Trophy, Users, Star,
  ArrowRight, CheckCircle2, Zap, Shield, Globe
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { LESSONS } from '@/lib/data'

export default function HomePage() {
  const features = [
    { icon: <Play size={20} className="text-blue-400" />, title: 'Video darslar', desc: '15 ta professional video ma\'ruza, jami 22+ soat kontent' },
    { icon: <BookOpen size={20} className="text-purple-400" />, title: "Ma'ruza matnlari", desc: "Har bir mavzu bo'yicha batafsil ma'ruza matni va misollar" },
    { icon: <ClipboardList size={20} className="text-cyan-400" />, title: 'Interaktiv testlar', desc: 'Har mavzudan 5 savol, natijalar va tushuntirishlar bilan' },
    { icon: <Trophy size={20} className="text-yellow-400" />, title: 'Sertifikat', desc: "Kursni muvaffaqiyatli tugatgach elektron sertifikat olasiz" },
  ]

  const highlights = [
    'Raqamli iqtisodiyot va AI asoslari',
    'Blokcheyn va kriptovalyutalar',
    'Bulut hisoblash va kiberxavfsizlik',
    'Big Data va IoT texnologiyalari',
    'Web va mobil dasturlash',
    'Kvant hisoblash va metaverse',
  ]

  const stats = [
    { icon: <BookOpen size={18} />, value: '15', label: 'Mavzu' },
    { icon: <Play size={18} />, value: '22+', label: 'Soat video' },
    { icon: <ClipboardList size={18} />, value: '75', label: 'Test savoli' },
    { icon: <Users size={18} />, value: 'TATU', label: 'Universiteti' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-grid py-24 px-4">
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <Badge variant="blue" className="mb-6 inline-flex">
            <Star size={11} />
            TATU — Raqamli Ta'lim Platformasi
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display leading-tight mb-6">
            <span className="text-text-primary">Raqamli Texnologiyalar</span>
            <br />
            <span className="text-gradient">va Innovatsiyalar</span>
          </h1>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            TATU talabalari uchun mo'ljallangan zamonaviy kurs. Sun'iy intellekt, blokcheyn,
            bulut hisoblash va boshqa 15 ta muhim mavzuni o'rganing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/course/raqamli-texnologiyalar">
              <Button size="lg" className="w-full sm:w-auto">
                Kursni boshlash
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Ro'yxatdan o'tish
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-xl p-4 text-center">
                <div className="flex justify-center mb-2 text-blue-400">{s.icon}</div>
                <p className="text-2xl font-bold font-display text-gradient">{s.value}</p>
                <p className="text-xs text-text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="purple" className="mb-4 inline-flex">Platforma imkoniyatlari</Badge>
            <h2 className="text-3xl font-bold font-display text-text-primary">
              O'rganish qulay va samarali
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <Card key={f.title} hover className="p-6">
                <div className="w-10 h-10 rounded-xl bg-surface-2 border border-border flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-text-primary mb-2 font-display">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topics preview */}
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="cyan" className="mb-4 inline-flex">Kurs tarkibi</Badge>
            <h2 className="text-3xl font-bold font-display text-text-primary mb-4">15 ta Mavzu</h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Zamonaviy raqamli texnologiyalarning barcha muhim sohalarini qamrab olgan keng qamrovli kurs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {LESSONS.map((lesson) => (
              <Card key={lesson.id} hover className="p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-400 shrink-0">
                  {lesson.topicNumber}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-text-primary truncate">{lesson.title}</p>
                  <p className="text-xs text-text-muted">{lesson.videoDuration}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/course/raqamli-texnologiyalar">
              <Button variant="secondary" size="lg">
                Kursni ko'rish
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="green" className="mb-4 inline-flex">
                <Zap size={11} />
                Nima o'rganasiz?
              </Badge>
              <h2 className="text-3xl font-bold font-display text-text-primary mb-6">
                Kelajak texnologiyalariga tayyorlaning
              </h2>
              <div className="space-y-3">
                {highlights.map((h) => (
                  <div key={h} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span className="text-text-secondary">{h}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/auth/register">
                  <Button size="lg">
                    Hoziroq boshlash
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Shield size={24} className="text-blue-400" />, title: 'Kiberxavfsizlik', bg: 'from-blue-500/10 to-blue-600/5' },
                { icon: <Globe size={24} className="text-purple-400" />, title: 'Web texnologiyalar', bg: 'from-purple-500/10 to-purple-600/5' },
                { icon: <Zap size={24} className="text-yellow-400" />, title: "Sun'iy intellekt", bg: 'from-yellow-500/10 to-yellow-600/5' },
                { icon: <Trophy size={24} className="text-emerald-400" />, title: 'Sertifikat', bg: 'from-emerald-500/10 to-emerald-600/5' },
              ].map((item) => (
                <Card key={item.title} className={`p-6 bg-gradient-to-br ${item.bg}`}>
                  <div className="mb-3">{item.icon}</div>
                  <p className="text-sm font-semibold text-text-primary">{item.title}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-display text-text-primary mb-4">
            Bugun boshlang
          </h2>
          <p className="text-text-secondary mb-8">
            Bepul ro'yxatdan o'ting va raqamli texnologiyalar dunyosiga kiriting
          </p>
          <Link href="/auth/register">
            <Button size="lg">
              Bepul ro'yxatdan o'tish
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
