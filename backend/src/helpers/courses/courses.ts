import { Course } from '../../models/Course'
import { CreateCourseRequest } from '../../models/CreateCourseRequest'
import { createLogger } from '../../utils/logger'
import { s3BucketName } from '../const'
import { getAllCourse, createCourse, getCoursesByType } from './coursesAcess'

const logger = createLogger('Log from Students.ts')
const uuidv4 = require('uuid/v4')

export async function getCourses(): Promise<Course[]> {
  return getAllCourse()
}

export async function getCoursesByTypeApi(type: string): Promise<Course[]> {
  return getCoursesByType(type)
}

export function createCourseApi(
  createCourseRequest: CreateCourseRequest
): Promise<Course> {
  logger.info(`Creating new course`)
  const courseId = uuidv4()

  const newStudent: Course = {
    typeId: '1',
    courseId: courseId,
    videoUrl: `https://${s3BucketName}.s3.us-east-1.amazonaws.com/${courseId}`,
    createdAt: new Date().getTime().toString(),
    ...createCourseRequest
  }

  return createCourse(newStudent)
}
