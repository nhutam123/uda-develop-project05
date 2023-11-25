import { apiEndpoint } from '../../shares/apiClient'
import Axios from 'axios'
import { Stock } from '../../shares/types/stocks'

export async function getStocks(idToken: string): Promise<Stock[]> {
  console.log('Fetching stocks')

  const response = await Axios.get(`${apiEndpoint}/stocks`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`
    }
  })
  console.log('Stocks:', response.data)
  return response.data.items
}

// export const createStock = async (
//   idToken: string,
//   newStock: CreateStockRequest
// ): Promise<Student> => {
//   const response = await Axios.post(
//     `${apiEndpoint}/students`,
//     JSON.stringify(newStock),
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${idToken}`
//       }
//     }
//   )
//   return response.data.item
// }

// export const deleteStudent = async (
//   idToken: string,
//   studentId: string
// ): Promise<void> => {
//   await Axios.delete(`${apiEndpoint}/students/${studentId}`, {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${idToken}`
//     }
//   })
// }

// export async function patchStudent(
//   idToken: string,
//   studentId: string,
//   updatedStudent: UpdateStudentRequest
// ): Promise<void> {
//   await Axios.patch(
//     `${apiEndpoint}/students/${studentId}`,
//     JSON.stringify(updatedStudent),
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${idToken}`
//       }
//     }
//   )
// }
