import type { NextPage } from 'next'
import { apiClient } from '../shares/apiClient'
import { useEffect, useState } from 'react'
import { CourseData } from '../shares/types'
import { HomeTemplate } from '../components/templates/home'
import { useAuth } from '../services/authen'
import { createStudent } from '../services/student/students-api'
import { CreateCourseRequest } from '../shares/types'
import { useRouter } from 'next/router'
import { getResponse } from '../shares/mooc'

type HomePageProps = {
  items: []
}

const Home: NextPage<HomePageProps> = (props) => {
  const [course, setCourse] = useState<CourseData>()
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const { query } = useRouter()
  const { type } = query

  const handleJoinCourse = (
    idToken: string,
    newStudent: CreateCourseRequest
  ) => {
    createStudent(idToken, newStudent)
  }
  const getCourse = async () => {
    setIsLoading(true)
    if (!type) {
      const { data } = await apiClient('tam').get('/courses')
      setCourse(data)
    } else {
      console.log('Tam dep trai')
      const { data } = await apiClient('tam').get(`/courses/${type}`)
      setCourse(data)
    }
    // setCourse(getResponse)
    setIsLoading(false)
  }

  // useEffect(() => {
  //   getCourse()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [type])

  return (
    <HomeTemplate
      items={props?.items || []}
      login={login}
      handleJoinCourse={handleJoinCourse}
      isLoading={isLoading}
    />
  )
}

export const getServerSideProps = () => {
  console.log('tam dep trai')

  return {
    props: getResponse
  }
}

export default Home
