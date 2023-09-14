import { ReactNode, ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
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

export type NextPageWithLayout<PageProps> = NextPage<PageProps> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type NextPagePropsWithLayout<PageProps> = AppProps & {
  Component: NextPageWithLayout<PageProps>
}
