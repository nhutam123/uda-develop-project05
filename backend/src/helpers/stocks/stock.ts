import { StockAccess } from './stockAccess'
import { createLogger } from '../../utils/logger'
import { Stock } from '../../models/stock/Stock'

const logger = createLogger('Log from Students.ts')
const uuidv4 = require('uuid/v4')
const stockAccess = new StockAccess()

// export async function getAllStudent(userId: string): Promise<Student[]> {
//   logger.info(`Getting all Students for user: ${userId}`)
//   return studentAccess.getAllStudent(userId)
// }

export function createStock(
  createStockRequest: Stock,
  userId: string
): Promise<Stock> {
  logger.info(`Creating new Stock for user: ${userId}`)
  const stockId = uuidv4()

  const newStock: Stock = {
    userId: userId,
    stockId: stockId,
    ...createStockRequest
  }

  return stockAccess.createStock(newStock)
}

// export function updateStudent(
//   updateStudentRequest: UpdateStudentRequest,
//   studentId: string,
//   userId: string
// ): Promise<StudentUpdate> {
//   logger.info(`Updating Student: ${studentId} of user: ${userId}`)

//   return studentAccess.updateStudent(updateStudentRequest, studentId, userId)
// }

// export async function deleteStudent(
//   studentId: string,
//   userId: string
// ): Promise<string> {
//   logger.info(`Deleting Student: ${studentId} of user: ${userId}`)
//   const item = await studentAccess.getStudentByKeySchema(studentId, userId)

//   logger.info(`Checking auth of Student: ${studentId} for: user ${userId}`)
//   if (!item) throw new Error(`Student item of ${studentId} is not exist !`)
//   logger.info(
//     `Check auth of Student: ${studentId} for: user ${userId} : SUCCESS !`
//   )

//   return studentAccess.deleteStudent(studentId, userId)
// }
