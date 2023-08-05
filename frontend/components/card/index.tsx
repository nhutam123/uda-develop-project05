import { Styles } from './styles'
import { Course, CreateCourseRequest } from '../../shares/types'
import { Button } from '../button'
import { useRouter } from 'next/router'
import { createStudent } from '../../services/student/students-api'
import { calculateDueDate } from '../../shares/utils'

type CardType = {
  item: Course
  login: () => void
  handleJoinCourse: (idToken: string, newStudent: CreateCourseRequest) => void
}

const { Container, Header, Typo, Description, Video, ButtonContainer } = Styles

export const Card = (props: CardType) => {
  const router = useRouter()
  const { item, login, handleJoinCourse } = props
  const { title, videoUrl } = item

  const handleJoin = () => {
    const token = localStorage.getItem('token')
    if (token) {
      handleJoinCourse(token, {
        name: title,
        videoUrl: videoUrl,
        dueDate: calculateDueDate()
      })
      router.push({
        pathname: '/student',
        query: { videoUrl: videoUrl, title: title }
      })
      console.log('tam')
    } else {
      login()
    }
  }

  return (
    <Container>
      <Video width="200" controls src={videoUrl} height="140" />
      <Header>{title}</Header>
      <Description>
        <Typo>Price: 100 $</Typo>
      </Description>
      <ButtonContainer>
        <Button
          text="Join"
          backgroundColor="#FF8800"
          color="#FFFFFF"
          minWidth="130px"
          onClick={handleJoin}
        />
      </ButtonContainer>
    </Container>
  )
}
