import styled from 'styled-components'
import { MediaQuery } from '../../../../shares/const/mediaQuery'

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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${MediaQuery.MOBILE_SCREEN} {
    width: 100vw;
  }
  ${MediaQuery.PC_SCREEN} {
    margin: 20px 0;
  }
`

const Content = styled.div`
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
  padding: 20px;
  min-height: 77vh;
`
export const Styles = {
  Container,
  Content,
  Wrapper
}
