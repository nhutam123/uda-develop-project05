import { Styles } from "./styles";

const { Nav, NavContainer, NavLink } = Styles;

export const Navbar = () => {
  return (
    <NavContainer>
      <Nav>
        <NavLink href="/">Do choi</NavLink>
      </Nav>
      <Nav>
        <NavLink href="/">Quan ao</NavLink>
      </Nav>
      <Nav>
        <NavLink href="/">Bim sua</NavLink>
      </Nav>
      <Nav>
        <NavLink href="/">Keo banh</NavLink>
      </Nav>
    </NavContainer>
  );
};
