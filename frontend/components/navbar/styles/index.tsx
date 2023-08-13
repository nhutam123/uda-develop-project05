import styled from 'styled-components'
import { Colors } from '../../../shares/const/colors'

const { YELLOW, WHITE, GREEN, BLUE } = Colors

const Nav = styled.li<{ isActive: boolean }>`
  padding: 10px;
  list-style: none;
  :hover {
    cursor: pointer;
    color: ${YELLOW};
  }
  color: ${(props) => (props.isActive ? YELLOW : '')};
  border-right: 2px solid ${(props) => (props.isActive ? YELLOW : WHITE)};
`

const NavContainer = styled.ul`
  width: 100%;
  margin: 0px;
  padding: 0px;
`

const NavLink = styled.button`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  height: 100%;
  padding: auto;
  :hover {
    cursor: pointer;
    color: ${YELLOW};
  }
  color: inherit;
  border: none;
  background-color: #fff;
`

export const Styles = {
  Nav,
  NavContainer,
  NavLink
}
