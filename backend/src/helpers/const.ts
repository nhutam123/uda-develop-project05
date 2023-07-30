import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { Types } from 'aws-sdk/clients/s3'

const AWSXRay = require('aws-xray-sdk')
const XAWS = AWSXRay.captureAWS(AWS)

export const docClient: DocumentClient = createDynamoDBClient()
export const s3Client: Types = new XAWS.S3({ signatureVersion: 'v4' })
export const courseTable = process.env.COURSES_TABLE
export const s3BucketName = process.env.S3_BUCKET_NAME

function createDynamoDBClient() {
  if (process.env.IS_OFFLINE) {
    return new XAWS.DynamoDB.DocumentClient({
      region: 'localhost',
      endpoint: 'http://localhost:8000'
    })
  }

  return new XAWS.DynamoDB.DocumentClient()
}
