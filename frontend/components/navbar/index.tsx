import { Styles } from './styles'
import { useRouter } from 'next/router'
const { Nav, NavContainer, NavLink } = Styles

export const Navbar = () => {
  const router = useRouter()
  const handleClick = (type: string) => {
    router.push({
      pathname: '/',
      query: { type: type }
    })
  }
  return (
    <NavContainer>
      <Nav>
        <NavLink onClick={() => handleClick('java')}>Java</NavLink>
      </Nav>
      <Nav>
        <NavLink onClick={() => handleClick('javascript')}>Javascript</NavLink>
      </Nav>
      <Nav>
        <NavLink onClick={() => handleClick('python')}>Python</NavLink>
      </Nav>
      <Nav>
        <NavLink onClick={() => handleClick('reactjs')}>Reactjs</NavLink>
      </Nav>
    </NavContainer>
  )
}
