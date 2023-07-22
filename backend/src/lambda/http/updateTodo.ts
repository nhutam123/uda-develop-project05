import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import { UpdateTodoRequest } from '../../requests/UpdateTodoRequest'
import { getUserId } from '../utils'
import { createLogger } from '../../utils/logger'
import { updateToDo } from '../../helpers/todos'

const logger = createLogger('UpdateTodo');

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Updating Event: ', event);
    const userId = getUserId(event)
    const todoId = event.pathParameters.todoId;
    const updatedTodo: UpdateTodoRequest = JSON.parse(event.body);
    const toDoItem = await updateToDo(updatedTodo, todoId, userId);

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': true 
        },
        body: JSON.stringify({
            "item": toDoItem
        }),
    }
};