import { Styles } from './styles'

const { Nav, NavContainer, NavLink } = Styles

export const Navbar = () => {
  return (
    <NavContainer>
      <Nav>
        <NavLink href="/">Java</NavLink>
      </Nav>
      <Nav>
        <NavLink href="/">Javascript</NavLink>
      </Nav>
      <Nav>
        <NavLink href="/">Python</NavLink>
      </Nav>
      <Nav>
        <NavLink href="/">Reactjx</NavLink>
      </Nav>
    </NavContainer>
  )
}
