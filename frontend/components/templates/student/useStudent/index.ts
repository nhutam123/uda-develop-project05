import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Student } from '../../../../shares/types'
import { StudentProps } from '../types'

export const useStudent = (props: StudentProps) => {
  const [url, setUrl] = useState('')
  const [courseTitle, setCourseTitle] = useState('')
  const { courses, handleDelete, isLoading } = props
  const router = useRouter()
  const { title, videoUrl } = router.query
  const deleteItem = (course: Student) => {
    handleDelete(course.studentId)
    router.push({
      pathname: '/student',
      query: { videoUrl: courses[1]?.videoUrl, title: courses[1]?.name }
    })
  }

  const handleClick = (course: Student) => {
    console.log('tam')
    router.push({
      pathname: '/student',
      query: { videoUrl: course.videoUrl, title: course.name }
    })
  }
  useEffect(() => {
    if (!videoUrl && !title) {
      setUrl(courses[0]?.videoUrl || '')
      setCourseTitle(courses[0]?.name || '')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courses.length, videoUrl])

  return {
    handleClick,
    courses,
    url,
    isLoading,
    deleteItem,
    courseTitle,
    title,
    videoUrl
  }
}
