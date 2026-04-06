export interface User {
  id: string
  email: string
  name: string
  password?: string
  role: 'admin' | 'student'
  studentId?: string
  group?: string
  createdAt: string
  avatar?: string
}

export interface Lesson {
  id: string
  topicNumber: number
  title: string
  slug: string
  description: string
  videoUrl: string
  videoDuration: string
  lectureText: string
  order: number
}

export interface Course {
  id: string
  title: string
  slug: string
  description: string
  shortDesc: string
  thumbnail: string
  totalLessons: number
  totalDuration: string
  lessons: Lesson[]
}

export interface Question {
  id: string
  lessonId: string
  topicNumber: number
  text: string
  options: string[]
  correctIndex: number
  explanation?: string
}

export interface TestAttempt {
  id: string
  userId: string
  lessonId: string
  topicNumber: number
  answers: number[]
  score: number
  totalQuestions: number
  percentage: number
  passed: boolean
  completedAt: string
  timeSpentSeconds: number
}

export interface LessonProgress {
  lessonId: string
  topicNumber: number
  videoWatched: boolean
  lectureRead: boolean
  testPassed: boolean
  testScore: number
  testPercentage: number
  completedAt?: string
  attempts: number
}

export interface StudentProgress {
  userId: string
  courseId: string
  lessons: LessonProgress[]
  overallPercentage: number
  completedLessons: number
  startedAt: string
  lastActivityAt: string
}

export interface FinalGrade {
  userId: string
  courseId: string
  grade: 'A' | 'B' | 'C' | 'D' | 'F'
  percentage: number
  points: number
  completedTopics: number
  totalTopics: number
  certificateIssued: boolean
  issuedAt?: string
}

export interface DashboardStats {
  totalStudents: number
  activeStudents: number
  averageGrade: number
  completionRate: number
  totalTestsPassed: number
  monthlyActivity: { month: string; students: number; tests: number }[]
  gradeDistribution: { grade: string; count: number; color: string }[]
  topStudents: { id: string; name: string; group: string; percentage: number; grade: string }[]
}
