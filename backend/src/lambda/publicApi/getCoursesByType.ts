import 'source-map-support/register'

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult
} from 'aws-lambda'
import { createLogger } from '../../utils/logger'
import { getCoursesByTypeApi } from '../../helpers/courses/courses'

const logger = createLogger('GetCoursesByType')

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  logger.info('Getting All Event: ', event)
  const courseType = event.pathParameters.courseType
  const coureses = await getCoursesByTypeApi(courseType)
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      items: coureses
    })
  }
}
