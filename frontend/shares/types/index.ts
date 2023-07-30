export type Course = {
  videoUrl: string
  typeId: string
  dueDate: string
  courseId: string
  createdAt: string
  title: string
}

export type CourseData = {
  items: Course[]
}
