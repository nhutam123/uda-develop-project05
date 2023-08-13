export type Course = {
  videoUrl: string
  typeId: string
  dueDate: string
  courseId: string
  createdAt: string
  title: string
  courseType: string
  login?: () => void
}

export type CourseData = {
  items: Course[]
}

export type CreateCourseRequest = {
  name: string
  dueDate: string
  videoUrl: string
}

export type Student = {
  studentId: string
  createdAt: string
  name: string
  dueDate: string
  isGraduated: boolean
  videoUrl?: string
}
