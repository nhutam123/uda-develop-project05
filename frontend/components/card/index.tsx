import { Styles } from './styles'
import { Button } from '../atoms/button'
import { CardType } from './types'
import { useCard } from './useCard'

const { Container, Header, Typo, Description, Video, ButtonContainer } = Styles

export const Card = (props: CardType) => {
  const { handleJoin, title, videoUrl, item } = useCard(props)
  return (
    <Container>
      <Video width="200" controls src={videoUrl + '.mp4'} height="140" />
      <Header>{title}</Header>
      <Description>
        <h3>Type: {item.courseType}</h3>
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
