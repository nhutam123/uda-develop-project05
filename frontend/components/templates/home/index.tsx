import styled from 'styled-components'
import { Card } from '../../card'
import { Course, CreateCourseRequest } from '../../../shares/types'
import { FC } from 'react'

type HomeProps = {
  items: Course[]
  login: () => void
  handleJoinCourse: (idToken: string, newStudent: CreateCourseRequest) => void
}

export const HomeTemplate: FC<HomeProps> = (props) => {
  const { items, login, handleJoinCourse } = props

  return (
    <Container>
      {items.map((item) => (
        <Card
          {...{ item: item, login: login, handleJoinCourse: handleJoinCourse }}
          key={item.courseId}
        />
      ))}
    </Container>
  )
}

const Container = styled.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px 40px;
`
