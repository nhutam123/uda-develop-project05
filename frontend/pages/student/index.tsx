import type { ReactNode } from 'react'
import { StudentTemplate } from '../../components/templates/student'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { NextPageWithLayout, Student } from '../../shares/types'
import { getStudents, deleteStudent } from '../../services/student/students-api'
import { GetStudentResponse } from '../../shares/mooc'
import { Layout } from '../../components/layout'

type StudentPageProps = {
  items: []
}

const StudentPage: NextPageWithLayout<StudentPageProps> = (props) => {
  const [courses, setCourses] = useState<Student[]>([])
  const [token, setToken] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { query } = useRouter()
  const { title, videoUrl } = query

  const getlistStudents = async (idToken: string) => {
    setIsLoading(true)
    const students = await getStudents(idToken)
    setCourses(students)
    setIsLoading(false)
  }

  const deleteCourse = async (studentId: string) => {
    await deleteStudent(token, studentId)
    getlistStudents(token)
  }

  useEffect(() => {
    const idToken = localStorage.getItem('token')
    setToken(idToken?.toString() || '')
    if (idToken) {
      getlistStudents(idToken.toString())
    }
  }, [])

  return (
    <StudentTemplate
      {...{
        title: title?.toString() || '',
        videoUrl: videoUrl?.toString() || '',
        courses: courses,
        handleDelete: deleteCourse,
        isLoading: isLoading
      }}
    />
  )
}

// export const getServerSideProps = () => {
//   return {
//     props: GetStudentResponse
//   }
// }

StudentPage.getLayout = (page: ReactNode) => <Layout>{page}</Layout>

export default StudentPage
