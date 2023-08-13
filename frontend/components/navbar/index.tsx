import { Styles } from './styles'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const { Nav, NavContainer, NavLink } = Styles

export const Navbar = () => {
  const [active, setActive] = useState('')
  const router = useRouter()
  const { query } = router
  const handleClick = (type: string) => {
    // setActive(type)
    router.push({
      pathname: '/',
      query: { type: type }
    })
  }

  useEffect(() => {
    if (query.type) {
      console.log('type', query.type)
      setActive(query.type.toString())
    }
  }, [query.type])

  return (
    <NavContainer>
      <Nav isActive={active === 'java'}>
        <NavLink onClick={() => handleClick('java')}>Java</NavLink>
      </Nav>
      <Nav isActive={active === 'javascript'}>
        <NavLink onClick={() => handleClick('javascript')}>Javascript</NavLink>
      </Nav>
      <Nav isActive={active === 'python'}>
        <NavLink onClick={() => handleClick('python')}>Python</NavLink>
      </Nav>
      <Nav isActive={active === 'reactjs'}>
        <NavLink onClick={() => handleClick('reactjs')}>Reactjs</NavLink>
      </Nav>
    </NavContainer>
  )
}
