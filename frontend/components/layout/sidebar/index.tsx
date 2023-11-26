import { Styles } from './styles'
import { Navbar } from '../../navbar'

const { Container, Header } = Styles

export const Sidebar = () => {
  return (
    <Container>
      <Header>Danh Mục</Header>
      <Navbar />
    </Container>
  )
}
