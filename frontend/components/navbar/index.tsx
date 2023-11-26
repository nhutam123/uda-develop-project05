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
      <Nav isActive={active === 'Dài hạn'}>
        <NavLink onClick={() => handleClick('java')}>Dài hạn</NavLink>
      </Nav>
      <Nav isActive={active === 'javascript'}>
        <NavLink onClick={() => handleClick('javascript')}>Ngắn han</NavLink>
      </Nav>
      <Nav isActive={active === 'python'}>
        <NavLink onClick={() => handleClick('python')}>Tích lũy</NavLink>
      </Nav>
      <Nav isActive={active === 'reactjs'}>
        <NavLink onClick={() => handleClick('reactjs')}>Thêm dao dịch</NavLink>
      </Nav>
    </NavContainer>
  )
}
