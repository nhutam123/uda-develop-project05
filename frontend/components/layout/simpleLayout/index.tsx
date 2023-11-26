import { ReactNode } from 'react'
import { Header } from '../header'
import { Styles } from './styles'
import { Footer } from '../footer'

const { Container, Wrapper, Content } = Styles

type LayoutProps = {
  children: ReactNode
}

export const SimpleLayout = (props: LayoutProps) => {
  const { children } = props
  return (
    <Wrapper>
      <Header isSimpleLayout />
      <Container>
        <Content>{children}</Content>
      </Container>
      <Footer />
    </Wrapper>
  )
}
