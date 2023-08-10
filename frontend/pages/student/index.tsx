import { NextPage } from 'next'
import { StudentTemplate } from '../../components/templates/student'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Student } from '../../shares/types'
import { getStudents, deleteStudent } from '../../services/student/students-api'

const StudentPage: NextPage = () => {
  const [courses, setCourses] = useState<Student[]>([])
  const [token, setToken] = useState('')

  const { query } = useRouter()
  const { title, videoUrl } = query

  const getlistStudents = async (idToken: string) => {
    const students = await getStudents(idToken)
    setCourses(students)
  }

  const deleteCourse = async (studentId: string) => {
    await deleteStudent(token, studentId)
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
        handleDelete: deleteCourse
      }}
    />
  )
}

export default StudentPage
