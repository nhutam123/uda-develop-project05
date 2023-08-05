import { Button } from '../../button'
import { Styles } from './styles'
import { useRouter } from 'next/router'
import { useAuth } from '../../../services/authen'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const { Container, Search, Logo } = Styles

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
            backgroundColor="red"
            color="#FFFFFF"
            borderColor="red"
            onClick={logout}
          />
          <Button
            text="MyPage"
            backgroundColor="green"
            color="#FFFFFF"
            borderColor="green"
            onClick={() => {
              router.push('/student')
            }}
          />
        </ButtonContainer>
      ) : (
        <Button
          text="Login"
          backgroundColor="green"
          color="#FFFFFF"
          borderColor="green"
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
