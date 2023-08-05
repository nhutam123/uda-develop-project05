import { FC } from 'react'
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
  const { title, videoUrl, courses, handleDelete } = props
  const router = useRouter()

  const deleteItem = async (studentId: string) => {
    await handleDelete(studentId)
    router.reload()
  }

  console.log(courses)

  return (
    <Container>
      {courses.length ? (
        <>
          <Header>{title}</Header>
          <Video width="200" controls src={videoUrl} height="140" />
        </>
      ) : (
        <Header>No lessons registered yet</Header>
      )}
      <ListCourseContainer>
        {courses.map((course) => (
          <CourseContainer key={course.studentId}>
            <h1>{course.name}</h1>
            <Button
              backgroundColor="red"
              color="white"
              text="delete"
              onClick={() => deleteItem(course.studentId)}
            />
          </CourseContainer>
        ))}
      </ListCourseContainer>
    </Container>
  )
}

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
  height: 48px;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  padding-left: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Container = styled.div`
  width: 800px;
`

const Video = styled.video`
  width: 100%;
  height: auto;
  border-radius: 8px;
`

const Header = styled.h1`
  color: red;
`
