import { Course } from '../../models/Course'
import { createLogger } from '../../utils/logger'
import { docClient, courseTable } from '../const'

const logger = createLogger('Log from StudentAccess.ts')

export const getAllCourse = async (): Promise<Course[]> => {
  logger.info(`Processing: Getting all Course from ${courseTable}`)
  const params = {
    TableName: courseTable,
    KeyConditionExpression: '#id = :id',
    ExpressionAttributeNames: {
      '#id': 'typeId'
    },
    ExpressionAttributeValues: {
      ':id': '1'
    }
  }
  const result = await docClient.query(params).promise()
  const items = result.Items
  logger.info(`Processing: Get ${items.length}  from ${courseTable}`)
  return items as Course[]
}

export const getCoursesByType = async (type: string): Promise<Course[]> => {
  logger.info(`Processing: Getting all Course from ${courseTable}`)
  const params = {
    TableName: courseTable,
    KeyConditionExpression: '#id = :id , #type = :type',
    ExpressionAttributeNames: {
      '#id': 'typeId',
      '#type': 'courseType'
    },
    ExpressionAttributeValues: {
      ':id': '1',
      ':type': type
    }
  }
  const result = await docClient.query(params).promise()
  const items = result.Items
  logger.info(`Processing: Get ${items.length}  from ${courseTable}`)
  return items as Course[]
}

export const createCourse = async (course: Course): Promise<Course> => {
  logger.info(
    `Create new Student: Insert ${course.courseId}  into table: ${courseTable}`
  )
  const params = {
    TableName: courseTable,
    Item: course
  }
  await docClient.put(params).promise()

  return course as Course
}
