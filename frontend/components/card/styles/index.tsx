import styled from 'styled-components'
import { MediaQuery } from '../../../shares/const/mediaQuery'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.2);
  padding: 10px;
  background-color: white;
  height: 400px;
  transition: transform 0.5s;
  :hover {
    transform: scale(1.06);
    cursor: pointer;
  }
  ${MediaQuery.MOBILE_SCREEN} {
    width: 100%;
    height: auto;
  }
`

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 10px;
  margin: 10px 0;
  color: red;
`
const Typo = styled.div`
  font-size: 16px;
  font-weight: 600;
`

const ButtonContainer = styled.div`
  margin: 20px 0;
`

const Description = styled.div`
  width: 80%;
`

const Video = styled.video`
  width: 230px;
  border-radius: 8px;
  ${MediaQuery.MOBILE_SCREEN} {
    width: 100%;
    height: auto;
  }
`

export const Styles = {
  Container,
  ButtonContainer,
  Video,
  Header,
  Typo,
  Description
}
