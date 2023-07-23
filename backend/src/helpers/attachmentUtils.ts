import { StudentAccess } from './studentsAcess'
import { createLogger } from '../utils/logger'

const logger = createLogger('Log from Students.ts')
const studentAccess = new StudentAccess()
const s3BucketName = process.env.S3_BUCKET_NAME

// TODO: Implement the fileStogare logic
export async function removeImageInS3(id: string): Promise<void> {
  logger.info(`Removiong Image id: ${id} in S3 bucket: ${s3BucketName}`)

  return studentAccess.removeImageInS3(id)
}

export function generateUploadUrl(
  studentId: string,
  userId: string
): Promise<string> {
  logger.info(`Generating uploadUrl of studentId: ${studentId}}`)

  return studentAccess.generateUploadUrl(studentId, userId)
}
