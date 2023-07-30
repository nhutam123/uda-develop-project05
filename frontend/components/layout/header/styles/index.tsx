import styled from "styled-components";

const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: rgba(59, 130, 246, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Search = styled.input`
  height: 50px;
  width: 40%;
  border: 1px solid aliceblue;
  border-radius: 10px;
  padding-left: 20px;
  box-sizing: border-box;
  outline: none;
  font-size: 16px;
`;

const Logo = styled.h1`
  color: darkviolet;
`;

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
`;

const CartIcon = styled.img`
  height: 100%;
  color: white;
`;

export const Styles = {
  Container,
  Search,
  Logo,
  ShoppingCart,
  CartIcon,
};
