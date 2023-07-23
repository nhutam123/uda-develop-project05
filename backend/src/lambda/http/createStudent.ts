import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import { CreateStudentRequest } from '../../requests/CreateStudentRequest'
import { getUserId } from '../utils';
import { createStudent } from '../../helpers/students' 
import { createLogger } from '../../utils/logger'

const logger = createLogger('Log from createStudent.ts');

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Creating Event: ', event);
    const userId = getUserId(event)
    const newStudent: CreateStudentRequest = JSON.parse(event.body);
    const student = await createStudent(newStudent, userId);
    return {
        statusCode: 201,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
            "item": student
        }),
    }
};