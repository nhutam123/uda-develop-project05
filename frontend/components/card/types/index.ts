import { Course, CreateCourseRequest } from '../../../shares/types'

export type CardType = {
  item: Course
  login: () => void
  handleJoinCourse: (idToken: string, newStudent: CreateCourseRequest) => void
}
