import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import { getUserId } from '../utils';
import { createLogger } from '../../utils/logger';
import { getAllStudent } from '../../helpers/students';

const logger = createLogger('GetStudents');

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Getting All Event: ', event);
    const userId = getUserId(event);
    const students = await getAllStudent(userId);

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
            "items": students,
        }),
    }
};
