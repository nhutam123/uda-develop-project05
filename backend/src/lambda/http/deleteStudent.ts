import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'

import { deleteStudent } from '../../helpers/students' 
import { getUserId } from '../utils'
import { createLogger } from '../../utils/logger'
import { removeImageInS3 } from '../../helpers/attachmentUtils'

const logger = createLogger('Log from deleteStudent.ts');

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Deleting Event: ', event);
    const userId = getUserId(event)
    const todoId = event.pathParameters.todoId;
    await removeImageInS3(todoId);
    const deleteData = await deleteStudent(todoId, userId);

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': true
        },
        body: deleteData,
    }
};