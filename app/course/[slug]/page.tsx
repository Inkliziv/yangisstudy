import { notFound, redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getCourse, LESSONS } from '@/lib/data'
import { getProgress } from '@/lib/store'
import LessonList from '@/components/course/LessonList'
import CourseProgress from '@/components/course/CourseProgress'
import Badge from '@/components/ui/Badge'
import { BookOpen, Clock, Users, Star } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const course = getCourse()
  if (!course) return {}
  return { title: course.title }
}

export default async function CoursePage({ params }: Props) {
  const course = getCourse()
  if (!course || course.slug !== params.slug) notFound()

  const session = await getServerSession(authOptions)
  const userId = (session?.user as any)?.id
  const progress = userId ? getProgress(userId, course.id) : null

  const firstLesson = LESSONS[0]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <Badge variant="blue" className="mb-4">Kurs</Badge>
              <h1 className="text-3xl font-bold font-display text-text-primary mb-3">
                {course.title}
              </h1>
              <p className="text-text-secondary leading-relaxed mb-6">{course.description}</p>

              <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                <span className="flex items-center gap-1.5"><BookOpen size={14} className="text-blue-400" /> {course.totalLessons} mavzu</span>
                <span className="flex items-center gap-1.5"><Clock size={14} className="text-purple-400" /> {course.totalDuration}</span>
                <span className="flex items-center gap-1.5"><Users size={14} className="text-cyan-400" /> TATU talabalari</span>
                <span className="flex items-center gap-1.5"><Star size={14} className="text-yellow-400" /> Sertifikat</span>
              </div>

              <div className="mt-6">
                {session ? (
                  <Link href={`/course/${params.slug}/lesson/${firstLesson.id}`}>
                    <Button size="lg">Darsni boshlash</Button>
                  </Link>
                ) : (
                  <Link href="/auth/login">
                    <Button size="lg">Kirish va boshlash</Button>
                  </Link>
                )}
              </div>
            </div>

            {/* Progress card */}
            {session && (
              <div className="w-full lg:w-72 shrink-0">
                <CourseProgress progress={progress} totalLessons={15} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lesson list */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-xl font-bold font-display text-text-primary mb-6">Kurs tarkibi</h2>
        <div className="max-w-2xl">
          <LessonList
            lessons={LESSONS}
            progress={progress?.lessons ?? []}
            courseSlug={params.slug}
          />
        </div>
      </div>
    </div>
  )
}
