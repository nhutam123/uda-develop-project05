import styled from 'styled-components'
import { Colors } from '../../../../shares/const/colors'
import { MediaQuery } from '../../../../shares/const/mediaQuery'

const { WHITE } = Colors

const Container = styled.div`
  ${MediaQuery.MOBILE_SCREEN} {
    display: none;
  }
  height: 100vh;
  width: 250px;
  background-color: ${WHITE};
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  color: rgb(39, 39, 42);
`

const Header = styled.h3``

export const Styles = {
  Container,
  Header
}
