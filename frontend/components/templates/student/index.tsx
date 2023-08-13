import { FC, Fragment } from 'react'
import { Button } from '../../atoms/button'
import { Loading } from '../../atoms/loading'
import { Styles } from './styles'
import { useStudent } from './useStudent'
import { StudentProps } from './types'
import { Colors } from '../../../shares/const/colors'

const {
  ButtonContainer,
  Container,
  CourseContainer,
  Header,
  ListCourseContainer,
  Title,
  TimeContainer,
  Video
} = Styles

const { YELLOW, RED, WHITE } = Colors
export const StudentTemplate: FC<StudentProps> = (props) => {
  const {
    courseTitle,
    courses,
    deleteItem,
    handleClick,
    isLoading,
    url,
    title,
    videoUrl
  } = useStudent(props)

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
          {courses.length ? (
            <div>
              <Header>{title || courseTitle}</Header>
              <Video
                width="200"
                controls
                src={(videoUrl || url) + '.mp4'}
                height="140"
              />
            </div>
          ) : (
            <Header>No lessons registered yet</Header>
          )}
          <ListCourseContainer>
            {courses.map((course) => (
              <CourseContainer key={course.studentId}>
                <TimeContainer>
                  <h3>latest time:</h3>

                  <Title> {course.dueDate}</Title>
                </TimeContainer>
                <Title>{course.name}</Title>
                <ButtonContainer>
                  <Button
                    onClick={() => handleClick(course)}
                    text="Learn"
                    backgroundColor={YELLOW}
                    color={WHITE}
                    borderColor={YELLOW}
                  />
                  <Button
                    backgroundColor={RED}
                    color={WHITE}
                    text="delete"
                    onClick={() => deleteItem(course)}
                    borderColor={RED}
                  />
                </ButtonContainer>
              </CourseContainer>
            ))}
          </ListCourseContainer>
        </Fragment>
      )}
    </Container>
  )
}
