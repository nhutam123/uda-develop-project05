import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import { UpdateStudentRequest } from '../../requests/UpdateStudentRequest'
import { getUserId } from '../utils'
import { createLogger } from '../../utils/logger'
import { updateStudent } from '../../helpers/students'

const logger = createLogger('UpdateStudent');

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Updating Event: ', event);
    const userId = getUserId(event)
    const studentId = event.pathParameters.studentId;
    const updatedStudent: UpdateStudentRequest = JSON.parse(event.body);
    const toDoItem = await updateStudent(updatedStudent, studentId, userId);

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