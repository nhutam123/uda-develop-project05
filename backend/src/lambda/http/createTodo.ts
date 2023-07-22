import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import { CreateTodoRequest } from '../../requests/CreateTodoRequest'
import { getUserId } from '../utils';
import { createToDo } from '../../helpers/todos' 
import { createLogger } from '../../utils/logger'

const logger = createLogger('Log from createTodo.ts');

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Creating Event: ', event);
    const userId = getUserId(event)
    const newTodo: CreateTodoRequest = JSON.parse(event.body);
    const toDoItem = await createToDo(newTodo, userId);
    return {
        statusCode: 201,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
            "item": toDoItem
        }),
    }
};