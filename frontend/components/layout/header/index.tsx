import { Button } from '../../button'
import { Styles } from './styles'

const { Container, Search, Logo, ShoppingCart, CartIcon } = Styles

export const Header = () => {
  return (
    <Container>
      <Logo>Tamln2-Class</Logo>
      <Search placeholder="Ban tim gi hom nay" />
      <Button text="Login" borderColor="blue" color="#FFFFF" />
    </Container>
  )
}
