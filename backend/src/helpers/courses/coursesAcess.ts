import { Course } from '../../models/Course'
import { createLogger } from '../../utils/logger'
import { docClient, courseTable } from '../const'

const logger = createLogger('Log from StudentAccess.ts')

export const getAllCourse = async (): Promise<Course[]> => {
  logger.info(`Processing: Getting all Course from ${courseTable}`)
  const params = {
    TableName: courseTable
  }
  const result = await docClient.query(params).promise()
  const items = result.Items
  logger.info(`Processing: Get ${items.length}  from ${courseTable}`)

  return items as Course[]
}
