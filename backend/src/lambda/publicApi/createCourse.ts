import 'source-map-support/register'

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult
} from 'aws-lambda'
import { createLogger } from '../../utils/logger'
import { CreateCourseRequest } from '../../models/CreateCourseRequest'
import { createCourseApi } from '../../helpers/courses/courses'

const logger = createLogger('Log from createCourse.ts')

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  logger.info('Creating Event: ', event)
  const newCourse: CreateCourseRequest = JSON.parse(event.body)
  const course = await createCourseApi(newCourse)
  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      item: course
    })
  }
}
