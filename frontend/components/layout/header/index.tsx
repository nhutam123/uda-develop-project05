import { Button } from '../../atoms/button'
import { Styles } from './styles'
import { useRouter } from 'next/router'
import { useAuth } from '../../../services/authen'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Colors } from '../../../shares/const/colors'

const { Container, Search, Logo } = Styles
const { GREEN, RED, WHITE } = Colors

export const Header = () => {
  const { login, logout, session } = useAuth()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const isLogged = localStorage.getItem('isLoggedIn')
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')

    console.log('token', token)
    console.log('isLoggedIn', isLogged)
    console.log('user', user)

    setIsLoggedIn(!!isLogged)
  }, [session])

  return (
    <Container>
      <Link href="/">
        <Logo>Tamln2-Class</Logo>
      </Link>
      <Search placeholder="What do you want to learn today" />
      {isLoggedIn ? (
        <ButtonContainer>
          <Button
            text="Logout"
            backgroundColor={RED}
            color="#FFFFFF"
            borderColor={RED}
            onClick={logout}
          />
          <Button
            text="MyPage"
            backgroundColor={GREEN}
            color="#FFFFFF"
            borderColor={GREEN}
            onClick={() => {
              router.push('/student')
            }}
          />
        </ButtonContainer>
      ) : (
        <Button
          text="Login"
          backgroundColor={GREEN}
          color="#FFFFFF"
          borderColor={GREEN}
          onClick={login}
        />
      )}
    </Container>
  )
}

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`