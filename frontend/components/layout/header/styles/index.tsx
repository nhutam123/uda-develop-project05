import styled from 'styled-components'
import { MediaQuery } from '../../../../shares/const/mediaQuery'
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: rgba(59, 130, 246, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${MediaQuery.MOBILE_SCREEN} {
    flex-direction: column;
    height: auto;
  }
`

const Search = styled.input<{ isSimpleLayout?: boolean }>`
  height: 50px;
  width: 40%;
  border: 1px solid aliceblue;
  border-radius: 10px;
  padding-left: 20px;
  box-sizing: border-box;
  outline: none;
  font-size: 16px;
  @media (max-width: 739px) {
    margin-bottom: 20px;
    width: 80%;
  }
  display: ${(props) => (props.isSimpleLayout ? 'none' : 'block')};
`

const Logo = styled.h1`
  ${MediaQuery.MOBILE_SCREEN} {
    font-size: 24px;
  }
  color: darkviolet;
`

const ShoppingCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1250dc;
  height: 50px;
  border-radius: 20px;
  padding: 0 20px;
  color: white;
  gap: 10px;
`

const CartIcon = styled.img`
  height: 100%;
  color: white;
`

const ButtonContainer = styled.div`
  ${MediaQuery.MOBILE_SCREEN} {
    display: none;
  }
  display: flex;
  gap: 20px;
`

const LogoContainer = styled.div`
  ${MediaQuery.MOBILE_SCREEN} {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }
`

const IconContainer = styled.div`
  ${MediaQuery.MOBILE_SCREEN} {
    display: block;
  }
  ${MediaQuery.PC_SCREEN} {
    display: none;
  }
`

export const Styles = {
  Container,
  Search,
  Logo,
  ShoppingCart,
  CartIcon,
  LogoContainer,
  ButtonContainer,
  IconContainer
}
