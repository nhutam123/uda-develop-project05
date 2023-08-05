import type { NextPage } from 'next'
import { apiClient } from '../shares/apiClient'
import { useEffect, useState } from 'react'
import { CourseData } from '../shares/types'
import { HomeTemplate } from '../components/templates/home'
import { useAuth } from '../services/authen'
import { createStudent } from '../services/student/students-api'
import { CreateCourseRequest } from '../shares/types'

const Home: NextPage = () => {
  const [course, setCourse] = useState<CourseData>()
  const { login } = useAuth()

  const handleJoinCourse = (
    idToken: string,
    newStudent: CreateCourseRequest
  ) => {
    createStudent(idToken, newStudent)
  }
  const getCourse = async () => {
    const { data } = await apiClient('tam').get('/courses')
    setCourse(data)
  }

  useEffect(() => {
    getCourse()
  }, [])

  return (
    <HomeTemplate
      items={course?.items || []}
      login={login}
      handleJoinCourse={handleJoinCourse}
    />
  )
}

export default Home
