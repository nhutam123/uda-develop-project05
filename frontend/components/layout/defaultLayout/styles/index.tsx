import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
`

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 739px) {
    width: 100vw;
  }
  @media (min-width: 738px) {
    margin: 20px 0;
  }
`

const Content = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 900px;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`
export const Styles = {
  Container,
  Content,
  Wrapper
}
