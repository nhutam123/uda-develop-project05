import { Styles } from './styles'
import { Course } from '../../shares/types'
import { Button } from '../button'

const { Container, Header, Typo, Description, Video, ButtonContainer } = Styles

export const Card = (props: Course) => {
  const { title, videoUrl } = props
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
        />
      </ButtonContainer>
    </Container>
  )
}
