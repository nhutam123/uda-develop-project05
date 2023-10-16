import styled from 'styled-components'
import { MediaQuery } from '../../../shares/const/mediaQuery'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
`

const Container = styled.div`
  width: 80%;
  display: flex;
  ${MediaQuery.MOBILE_SCREEN} {
    width: 100vw;
  }
  ${MediaQuery.PC_SCREEN} {
    margin: 20px 0;
  }
`

const Content = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  ${MediaQuery.MOBILE_SCREEN} {
    width: 100vw;
  }
  ${MediaQuery.PC_SCREEN} {
    width: 900px;
  }
  display: flex;
  justify-content: center;
`

const SidebarContainer = styled.div`
  width: 300px;
  ${MediaQuery.MOBILE_SCREEN} {
    display: none;
  }
`

export const Styles = {
  Wrapper,
  Container,
  Content,
  SidebarContainer
}
