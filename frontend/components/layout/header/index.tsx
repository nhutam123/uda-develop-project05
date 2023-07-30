import Auth from '../../../services/auth/Auth'
import { Button } from '../../button'
import { Styles } from './styles'
import { useRouter } from 'next/router'

const { Container, Search, Logo } = Styles

interface LogInProps {
  auth: Auth
}

export const Header = () => {
  const router = useRouter()
  const auth = new Auth(router)
  return (
    <Container>
      <Logo>Tamln2-Class</Logo>
      <Search placeholder="Ban tim gi hom nay" />
      <Button
        text="Login"
        backgroundColor="green"
        color="#FFFFFF"
        borderColor="green"
        onClick={() => auth.login()}
      />
    </Container>
  )
}
function createHistory() {
  throw new Error('Function not implemented.')
}
