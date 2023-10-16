import styled from 'styled-components'
import { Colors } from '../../../shares/const/colors'
import { Fragment, useEffect, useRef, useState } from 'react'
const { Main, WHITE, Blur } = Colors

export const Footer = () => {
  const scrollToTop = useRef<HTMLButtonElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 120) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    })

    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Fragment>
      {isVisible && (
        <ButtonScrollToTop ref={scrollToTop} onClick={handleScrollToTop}>
          Top
        </ButtonScrollToTop>
      )}
      <Container>
        <h1>Footer</h1>
      </Container>
    </Fragment>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  width: 100vw;
  background-color: ${Main};
  color: ${WHITE};
`

const ButtonScrollToTop = styled.button`
  background: ${Blur};
  outline: none;
  border: none;
  color: ${WHITE};
  transition: 0.5ms;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 40px;
  right: 20px;
  :hover {
    cursor: pointer;
    transform: scale(1.06);
  }
  box-shadow: 0px 2px 8px 2px rgba(122, 200, 1, 0.3);
`
