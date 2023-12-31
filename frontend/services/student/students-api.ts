import { apiEndpoint } from '../../shares/apiClient'
import { CreateCourseRequest, Student } from '../../shares/types'
import Axios from 'axios'

export async function getStudents(idToken: string): Promise<Student[]> {
  console.log('Fetching students')

  const response = await Axios.get(`${apiEndpoint}/students`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`
    }
  })
  console.log('Students:', response.data)
  return response.data.items
}

export const createStudent = async (
  idToken: string,
  newStudent: CreateCourseRequest
): Promise<Student> => {
  const response = await Axios.post(
    `${apiEndpoint}/students`,
    JSON.stringify(newStudent),
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}`
      }
    }
  )
  return response.data.item
}

export const deleteStudent = async (
  idToken: string,
  studentId: string
): Promise<void> => {
  await Axios.delete(`${apiEndpoint}/students/${studentId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`
    }
  })
}

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

export async function getUploadUrl(courseId: string): Promise<string> {
  const response = await Axios.post(
    `${apiEndpoint}/students${courseId}/attachment`,
    '',
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  return response.data.uploadUrl
}

export async function uploadFile(
  uploadUrl: string,
  file: Buffer
): Promise<void> {
  await Axios.put(uploadUrl, file)
}
