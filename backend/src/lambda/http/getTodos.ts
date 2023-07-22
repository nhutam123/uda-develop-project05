import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import { getUserId } from '../utils';
import { createLogger } from '../../utils/logger';
import { getAllToDo } from '../../helpers/todos';

const logger = createLogger('GetTodos');

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Getting All Event: ', event);
    const userId = getUserId(event);
    const toDos = await getAllToDo(userId);

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
            "items": toDos,
        }),
    }
};
