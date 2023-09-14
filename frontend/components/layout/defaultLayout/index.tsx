import { ReactNode } from 'react'
import { Header } from '../header'
import { Styles } from './styles'
import { Footer } from '../footer'
import { Banner } from '../banner'

const { Container, Wrapper, Content } = Styles

type LayoutProps = {
  children: ReactNode
}

export const DefaultLayout = (props: LayoutProps) => {
  const { children } = props
  return (
    <Wrapper>
      <Header />
      <Container>
        <Banner />
        <Content>{children}</Content>
      </Container>
      <Footer />
    </Wrapper>
  )
}
