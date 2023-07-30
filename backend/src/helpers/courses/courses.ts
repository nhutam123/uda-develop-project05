import { Course } from '../../models/Course'
import { CreateCourseRequest } from '../../requests/CreateCourseRequest'
import { createLogger } from '../../utils/logger'
import { getAllCourse, createCourse } from './coursesAcess'

const logger = createLogger('Log from Students.ts')
const uuidv4 = require('uuid/v4')

export async function getCourses(): Promise<Course[]> {
  return getAllCourse()
}

export function createCourseApi(
  createCourseRequest: CreateCourseRequest
): Promise<Course> {
  logger.info(`Creating new course`)
  const courseId = uuidv4()

  const newStudent: Course = {
    typeId: '1',
    courseId: courseId,
    videoUrl: '',
    createdAt: new Date().getTime().toString(),
    ...createCourseRequest
  }

  return createCourse(newStudent)
}
