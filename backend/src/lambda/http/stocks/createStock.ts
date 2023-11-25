import 'source-map-support/register'

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult
} from 'aws-lambda'
import { Stock } from '../../../models/stock/Stock'
import { getUserId } from '../../utils'
import { createStock } from '../../../helpers/stocks/stock'
import { createLogger } from '../../../utils/logger'

const logger = createLogger('Log from createStudent.ts')

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  logger.info('Creating Event: ', event)
  const userId = getUserId(event)
  const newSttock: Stock = JSON.parse(event.body)
  const stock = await createStock(newSttock, userId)
  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      item: stock
    })
  }
}
