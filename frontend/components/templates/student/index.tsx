import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Student } from '../../../shares/types'
import { Button } from '../../button'
import { useRouter } from 'next/router'

type StudentProps = {
  title: string
  videoUrl: string
  courses: Student[]
  handleDelete: (studentId: string) => void
}

export const StudentTemplate: FC<StudentProps> = (props) => {
  const [url, setUrl] = useState('')
  const [courseTitle, setCourseTitle] = useState('')
  const { courses, handleDelete } = props
  const router = useRouter()

  const { title, videoUrl } = router.query

  const deleteItem = async (studentId: string) => {
    await handleDelete(studentId)
    router.reload()
  }

  const handleClick = (course: Student) => {
    console.log('tam')
    router.push({
      pathname: '/student',
      query: { videoUrl: course.videoUrl, title: course.name }
    })
  }
  console.log(courses)
  useEffect(() => {
    if (!videoUrl && !title) {
      setUrl(courses[0]?.videoUrl || '')
      setCourseTitle(courses[0]?.name || '')
    }
  }, [courses.length, videoUrl])

  return (
    <Container>
      <>
        <Header>
          {courses.length ? title || courseTitle : 'No lessons registered yet'}
        </Header>
        <Video
          width="200"
          controls
          src={(videoUrl || url) + '.mp4'}
          height="140"
        />
      </>
      <ListCourseContainer>
        {courses.map((course) => (
          <CourseContainer key={course.studentId}>
            <TimeContainer>
              <h3>latest time:</h3>

              <Title> {course.dueDate}</Title>
            </TimeContainer>
            <Title>{course.name}</Title>
            <ButtonContainer>
              <Button
                onClick={() => handleClick(course)}
                text="Learn"
                backgroundColor="blue"
                color="#fff"
              />
              <Button
                backgroundColor="red"
                color="white"
                text="delete"
                onClick={() => deleteItem(course.studentId)}
              />
            </ButtonContainer>
          </CourseContainer>
        ))}
      </ListCourseContainer>
    </Container>
  )
}

const TimeContainer = styled.div`
  display: flex;
  gap: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 20px;
`

const ListCourseContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  margin-top: 24px;
`

const CourseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  padding-left: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Container = styled.div`
  width: 800px;
  margin-bottom: 40px;
`

const Video = styled.video`
  width: 800px;
  height: 500px;
  border-radius: 8px;
`

const Header = styled.h1`
  color: red;
`
const Title = styled.h3`
  color: red;
`
