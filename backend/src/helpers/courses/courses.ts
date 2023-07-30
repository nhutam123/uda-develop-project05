import { Course } from '../../models/Course'
import { getAllCourse } from './coursesAcess'

export async function getCourses(): Promise<Course[]> {
  return getAllCourse()
}
