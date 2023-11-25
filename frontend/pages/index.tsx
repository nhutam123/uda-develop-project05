import type { ReactNode } from 'react'
import { apiClient } from '../shares/apiClient'
import { useEffect, useState } from 'react'
import { CourseData, NextPageWithLayout } from '../shares/types'
import { useAuth } from '../services/authen'
import { createStudent } from '../services/student/students-api'
import { CreateCourseRequest } from '../shares/types'
import { DefaultLayout } from '../components/layout/defaultLayout'
import { HomeTemplate } from '../components/templates/home'

type HomePageProps = {
  items: []
}

const Home: NextPageWithLayout<HomePageProps> = (props) => {
  const [course, setCourse] = useState<CourseData>()
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()

  const handleJoinCourse = (
    idToken: string,
    newStudent: CreateCourseRequest
  ) => {
    createStudent(idToken, newStudent)
  }
  const getCourse = async () => {
    setIsLoading(true)
    const { data } = await apiClient('').get('/courses')
    setCourse(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getCourse()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <HomeTemplate
      items={course?.items || []}
      login={login}
      handleJoinCourse={handleJoinCourse}
      isLoading={isLoading}
    />
  )
}

export default Home

Home.getLayout = (page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>
