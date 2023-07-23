import { Student } from '../models/Student'
import { CreateStudentRequest } from '../requests/CreateStudentRequest'
import { UpdateStudentRequest } from '../requests/UpdateStudentRequest'
import { StudentUpdate } from '../models/StudentUpdate'
import { StudentAccess } from './studentsAcess'
import { createLogger } from '../utils/logger'

const logger = createLogger('Log from Todos.ts')
const uuidv4 = require('uuid/v4')
const studentAccess = new StudentAccess()

export async function getAllStudent(userId: string): Promise<Student[]> {
  logger.info(`Getting all todos for user: ${userId}`)
  return studentAccess.getAllStudent(userId)
}

export function createStudent(
  createStudentRequest: CreateStudentRequest,
  userId: string
): Promise<Student> {
  logger.info(`Creating new todo for user: ${userId}`)
  const studentId = uuidv4()

  const newStudent: Student = {
    userId: userId,
    studentId: studentId,
    imageUrl: '',
    createdAt: new Date().getTime().toString(),
    isGraduated: false,
    ...createStudentRequest
  }

  return studentAccess.createStudent(newStudent)
}

export function updateStudent(
  updateStudentRequest: UpdateStudentRequest,
  studentId: string,
  userId: string
): Promise<StudentUpdate> {
  logger.info(`Updating Student: ${studentId} of user: ${userId}`)

  return studentAccess.updateStudent(updateStudentRequest, studentId, userId)
}

export async function deleteStudent(
  studentId: string,
  userId: string
): Promise<string> {
  logger.info(`Deleting Student: ${studentId} of user: ${userId}`)
  const item = await studentAccess.getStudentByKeySchema(studentId, userId)

  logger.info(`Checking auth of Student: ${studentId} for: user ${userId}`)
  if (!item) throw new Error(`Student item of ${studentId} is not exist !`)
  logger.info(
    `Check auth of Student: ${studentId} for: user ${userId} : SUCCESS !`
  )

  return studentAccess.deleteStudent(studentId, userId)
}
