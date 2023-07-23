import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import { generateUploadUrl } from '../../helpers/attachmentUtils'
import { createLogger } from '../../utils/logger'

const logger = createLogger('GenerateUploadUrl');

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Generating UploadUrl Event: ', event);
    const studentId = event.pathParameters.studentId;
    const URL = await generateUploadUrl(studentId);

    return {
        statusCode: 202,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
            uploadUrl: URL,
        })
    };
};

