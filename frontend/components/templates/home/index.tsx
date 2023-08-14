import styled from 'styled-components'
import { Card } from '../../card'
import { Course, CreateCourseRequest } from '../../../shares/types'
import { FC, Fragment } from 'react'
import { Loading } from '../../atoms/loading'

type HomeProps = {
  items: Course[]
  login: () => void
  handleJoinCourse: (idToken: string, newStudent: CreateCourseRequest) => void
  isLoading: boolean
}

export const HomeTemplate: FC<HomeProps> = (props) => {
  const { items, login, handleJoinCourse, isLoading } = props

  return (
    <Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          {items.map((item) => (
            <Card
              {...{
                item: item,
                login: login,
                handleJoinCourse: handleJoinCourse
              }}
              key={item.courseId}
            />
          ))}
        </Container>
      )}
    </Fragment>
  )
}

const Container = styled.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px 40px;
`