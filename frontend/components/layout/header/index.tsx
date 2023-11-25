import { Button } from '../../atoms/button'
import { Styles } from './styles'
import { useRouter } from 'next/router'
import { useAuth } from '../../../services/authen'
import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import { Colors } from '../../../shares/const/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const {
  Container,
  Search,
  Logo,
  ButtonContainer,
  IconContainer,
  LogoContainer
} = Styles
const { GREEN, RED, WHITE } = Colors

export const Header = () => {
  const { login, logout, session } = useAuth()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const isLogged = localStorage.getItem('isLoggedIn')
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')

    setIsLoggedIn(!!isLogged)
  }, [session])

  return (
    <Container>
      <LogoContainer>
        <Link href="/">
          <Logo>DREAM HOUSE</Logo>
        </Link>
        <IconContainer>
          <FontAwesomeIcon icon={['fab', 'bars']} />
        </IconContainer>
      </LogoContainer>
      <Search placeholder="What do you want to learn today" />
      <ButtonContainer>
        {isLoggedIn ? (
          <Fragment>
            <Button
              text="Logout"
              backgroundColor={RED}
              color={WHITE}
              borderColor={RED}
              onClick={logout}
            />
            <Button
              text="MyPage"
              backgroundColor={GREEN}
              color={WHITE}
              borderColor={GREEN}
              onClick={() => {
                router.push('/stock')
              }}
            />
          </Fragment>
        ) : (
          <Button
            text="Login"
            backgroundColor={GREEN}
            color={WHITE}
            borderColor={GREEN}
            onClick={login}
          />
        )}
      </ButtonContainer>
    </Container>
  )
}
