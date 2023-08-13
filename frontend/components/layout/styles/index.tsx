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
  margin-top: 20px;
`

const Content = styled.div`
  padding: 0 20px;
  background-color: white;
  border-radius: 8px;
  width: 900px;
  display: flex;
  justify-content: center;
`

const SidebarContainer = styled.div`
  width: 300px;
`

export const Styles = {
  Wrapper,
  Container,
  Content,
  SidebarContainer
}
