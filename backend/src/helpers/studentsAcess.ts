import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { Types } from 'aws-sdk/clients/s3'
import { Student } from '../models/Student'
import { StudentUpdate } from '../models/StudentUpdate'
import { createLogger } from '../utils/logger'

const logger = createLogger('Log from StudentAccess.ts')
const AWSXRay = require('aws-xray-sdk')
const XAWS = AWSXRay.captureAWS(AWS)

export class StudentAccess {
  constructor(
    private readonly docClient: DocumentClient = createDynamoDBClient(),
    private readonly s3Client: Types = new XAWS.S3({ signatureVersion: 'v4' }),
    private readonly studentTable = process.env.STUDENTS_TABLE,
    private readonly s3BucketName = process.env.S3_BUCKET_NAME
  ) {}

  async getAllStudent(userId: string): Promise<Student[]> {
    logger.info(
      `Processing: Getting all Students of ${userId} from ${this.studentTable}`
    )
    const params = {
      TableName: this.studentTable,
      KeyConditionExpression: '#userId = :userId',
      ExpressionAttributeNames: {
        '#userId': 'userId'
      },
      ExpressionAttributeValues: {
        ':userId': userId
      }
    }
    const result = await this.docClient.query(params).promise()
    const items = result.Items
    logger.info(
      `Processing: Get ${items.length} Students of ${userId} from ${this.studentTable}`
    )

    return items as Student[]
  }

  async createStudent(student: Student): Promise<Student> {
    logger.info(
      `Create new Student: Insert ${student.studentId} of user: ${student.userId} into table: ${this.studentTable}`
    )
    const params = {
      TableName: this.studentTable,
      Item: student
    }
    await this.docClient.put(params).promise()

    return student as Student
  }

  async updateStudent(
    studentUpdate: StudentUpdate,
    studentId: string,
    userId: string
  ): Promise<StudentUpdate> {
    logger.info('Update student: ', studentUpdate)

    const params = {
      TableName: this.studentTable,
      Key: {
        userId: userId,
        studentId: studentId
      },
      UpdateExpression:
        'set #studentName = :studentName, #studentDate = :StudentDate, #status = :isGraduatedStudent',
      ExpressionAttributeNames: {
        '#studentName': 'name',
        '#studentDate': 'dueDate',
        '#status': 'isGraduated'
      },

      ExpressionAttributeValues: {
        ':studentName': studentUpdate.name,
        ':StudentDate': studentUpdate.dueDate,
        ':isGraduatedStudent': studentUpdate.isGraduated
      },
      ReturnValues: 'UPDATED_NEW'
    }

    const result = await this.docClient.update(params).promise()
    const attributes = result.Attributes

    return attributes as StudentUpdate
  }

  async deleteStudent(studentId: string, userId: string): Promise<string> {
    logger.info('Delete Student: ', studentId)
    const params = {
      TableName: this.studentTable,
      Key: {
        userId: userId,
        studentId: studentId
      }
    }

    await this.docClient.delete(params).promise()

    return
  }

  async generateUploadUrl(studentId: string, userId: string): Promise<string> {
    logger.info('Generate upload url of: ', studentId)
    const url = this.s3Client.getSignedUrl('putObject', {
      Bucket: this.s3BucketName,
      Key: studentId,
      Expires: 600
    })
    await this.docClient
      .update({
        TableName: this.studentTable,
        Key: { userId, studentId },
        UpdateExpression: 'set imageUrl=:URL',
        ExpressionAttributeValues: {
          ':URL': url.split('?')[0]
        },
        ReturnValues: 'UPDATED_NEW'
      })
      .promise()

    return url as string
  }

  async removeImageInS3(id: string): Promise<void> {
    const params = {
      Bucket: this.s3BucketName,
      Key: id
    }
    try {
      logger.info(`Find image of id: ${id} in S3`)
      await this.s3Client.headObject(params).promise()

      try {
        await this.s3Client.deleteObject(params).promise()
        logger.info(`Image of id: ${id} deleted Successfully`)
      } catch (err) {
        logger.error('Error in deleting Image in S3 : ' + JSON.stringify(err))
      }
    } catch (err) {
      logger.error('File not Found ERROR : ' + err.code)
    }
  }

  async getStudentByKeySchema(
    studentId: string,
    userId: string
  ): Promise<Student> {
    logger.info(`GettingStudent ${studentId} from ${this.studentTable}`)
    const params = {
      TableName: this.studentTable,
      Key: {
        userId: userId,
        studentId: studentId
      }
    }
    const result = await this.docClient.get(params).promise()

    const student = result.Item

    return student as Student
  }
}

function createDynamoDBClient() {
  if (process.env.IS_OFFLINE) {
    return new XAWS.DynamoDB.DocumentClient({
      region: 'localhost',
      endpoint: 'http://localhost:8000'
    })
  }

  return new XAWS.DynamoDB.DocumentClient()
}
