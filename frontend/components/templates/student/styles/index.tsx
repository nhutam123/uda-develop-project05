import styled from 'styled-components'
import { MediaQuery } from '../../../../shares/const/mediaQuery'

const TimeContainer = styled.div`
  display: flex;
  gap: 20px;
`
const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 20px;
`
const ListCourseContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  margin-top: 24px;
`
const CourseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding-left: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  ${MediaQuery.MOBILE_SCREEN} {
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
`
const Container = styled.div`
  width: 800px;
  margin-bottom: 40px;
  ${MediaQuery.MOBILE_SCREEN} {
    width: 100%;
  }
`
const Video = styled.video`
  ${MediaQuery.PC_SCREEN} {
    width: 800px;
    height: 500px;
  }
  border-radius: 8px;
  ${MediaQuery.MOBILE_SCREEN} {
    width: 100%;
    height: auto;
  }
`
const Header = styled.h1`
  color: red;
`
const Title = styled.h3`
  color: red;
`

export const Styles = {
  Container,
  CourseContainer,
  Video,
  Title,
  Header,
  ListCourseContainer,
  ButtonContainer,
  TimeContainer
}
