import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { createLogger } from '../../utils/logger'
import { Stock } from '../../models/stock/Stock'

const logger = createLogger('Log from StudentAccess.ts')
const AWSXRay = require('aws-xray-sdk')
const XAWS = AWSXRay.captureAWS(AWS)

export class StockAccess {
  constructor(
    private readonly docClient: DocumentClient = createDynamoDBClient(),
    // private readonly s3Client: Types = new XAWS.S3({ signatureVersion: 'v4' }),
    private readonly stockTable = process.env.STOCKS_TABLE // private readonly s3BucketName = process.env.S3_BUCKET_NAME
  ) {}

  async getAllStocks(userId: string): Promise<Stock[]> {
    logger.info(
      `Processing: Getting all Stocks of ${userId} from ${this.stockTable}`
    )
    const params = {
      TableName: this.stockTable,
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
      `Processing: Get ${items.length} Students of ${userId} from ${this.stockTable}`
    )

    return items as Stock[]
  }

  async createStock(stock: Stock): Promise<Stock> {
    logger.info(
      `Create new Student: Insert ${stock.stockId} of user: ${stock.userId} into table: ${this.stockTable}`
    )
    const params = {
      TableName: this.stockTable,
      Item: stock
    }
    await this.docClient.put(params).promise()

    return stock as Stock
  }

  // async updateStudent(
  //   studentUpdate: StudentUpdate,
  //   studentId: string,
  //   userId: string
  // ): Promise<StudentUpdate> {
  //   logger.info('Update student: ', studentUpdate)

  //   const params = {
  //     TableName: this.studentTable,
  //     Key: {
  //       userId: userId,
  //       studentId: studentId
  //     },
  //     UpdateExpression: 'set #studentDate = :StudentDate',
  //     ExpressionAttributeNames: {
  //       '#studentDate': 'dueDate'
  //     },

  //     ExpressionAttributeValues: {
  //       ':StudentDate': studentUpdate.dueDate
  //     },
  //     ReturnValues: 'UPDATED_NEW'
  //   }

  //   const result = await this.docClient.update(params).promise()
  //   const attributes = result.Attributes

  //   return attributes as StudentUpdate
  // }

  // async deleteStudent(studentId: string, userId: string): Promise<string> {
  //   logger.info('Delete Student: ', studentId)
  //   const params = {
  //     TableName: this.studentTable,
  //     Key: {
  //       userId: userId,
  //       studentId: studentId
  //     }
  //   }

  //   await this.docClient.delete(params).promise()

  //   return
  // }

  // async generateUploadUrl(studentId: string, userId: string): Promise<string> {
  //   logger.info('Generate upload url of: ', studentId)
  //   const url = this.s3Client.getSignedUrl('putObject', {
  //     Bucket: this.s3BucketName,
  //     Key: studentId,
  //     Expires: 600
  //   })
  //   await this.docClient
  //     .update({
  //       TableName: this.studentTable,
  //       Key: { userId, studentId },
  //       UpdateExpression: 'set imageUrl=:URL',
  //       ExpressionAttributeValues: {
  //         ':URL': url.split('?')[0]
  //       },
  //       ReturnValues: 'UPDATED_NEW'
  //     })
  //     .promise()

  //   return url as string
  // }

  // async removeImageInS3(id: string): Promise<void> {
  //   const params = {
  //     Bucket: this.s3BucketName,
  //     Key: id
  //   }
  //   try {
  //     logger.info(`Find image of id: ${id} in S3`)
  //     await this.s3Client.headObject(params).promise()

  //     try {
  //       await this.s3Client.deleteObject(params).promise()
  //       logger.info(`Image of id: ${id} deleted Successfully`)
  //     } catch (err) {
  //       logger.error('Error in deleting Image in S3 : ' + JSON.stringify(err))
  //     }
  //   } catch (err) {
  //     logger.error('File not Found ERROR : ' + err.code)
  //   }
  // }

  // async getStudentByKeySchema(
  //   studentId: string,
  //   userId: string
  // ): Promise<Student> {
  //   logger.info(`GettingStudent ${studentId} from ${this.stockTable}`)
  //   const params = {
  //     TableName: this.stockTable,
  //     Key: {
  //       userId: userId,
  //       studentId: studentId
  //     }
  //   }
  //   const result = await this.docClient.get(params).promise()

  //   const student = result.Item

  //   return student as Student
  // }
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
