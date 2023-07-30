import styled from 'styled-components'
import { Card } from '../../card'
import { Course } from '../../../shares/types'
import { FC } from 'react'

type HomeProps = {
  items: Course[]
}

export const HomeTemplate: FC<HomeProps> = (props) => {
  const { items } = props

  return (
    <Container>
      {items.map((item) => (
        <Card {...item} key={item.courseId} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
