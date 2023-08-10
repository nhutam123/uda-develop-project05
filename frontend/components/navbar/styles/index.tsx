import styled from 'styled-components'

const Nav = styled.li`
  padding: 10px;
  list-style: none;
  :hover {
    cursor: pointer;
    color: #eecb2e;
  }
`

const NavContainer = styled.ul`
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
  color: rgb(39, 39, 42);
  :hover {
    cursor: pointer;
    color: #97ce3f;
  }
  color: blue;
  border: none;
  background-color: #fff;
`

export const Styles = {
  Nav,
  NavContainer,
  NavLink
}
