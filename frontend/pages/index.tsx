import type { NextPage } from 'next'
import { apiClient } from '../shares/apiClient'
import { useEffect, useState } from 'react'
import { CourseData } from '../shares/types'
import { HomeTemplate } from '../components/templates/home'

const Home: NextPage = () => {
  const [course, setCourse] = useState<CourseData>()
  const getCourse = async () => {
    console.log('tamdeptrai')
    const { data } = await apiClient('tam').get('/courses')
    setCourse(data)
  }

  useEffect(() => {
    getCourse()
  }, [])

  return <HomeTemplate items={course?.items || []} />
}

export default Home
