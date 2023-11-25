import { FC, Fragment } from 'react'
import { Loading } from '../../atoms/loading'
import { Styles } from './styles'
import { useStudent } from './useStudent'
import { StocksProps } from './types'

const {
  Container,
  CourseContainer,
  Header,
  ListCourseContainer,
  Title,
  TimeContainer
} = Styles

export const StockTemplate: FC<StocksProps> = (props) => {
  const { isLoading, stocks } = useStudent(props)

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
          {stocks.length ? (
            <div>{/* <Header>{title || courseTitle}</Header> */}</div>
          ) : (
            <Header>No lessons registered yet</Header>
          )}
          <ListCourseContainer>
            {stocks.map((stock) => (
              <CourseContainer key={stock.stockId}>
                <TimeContainer>
                  <Title> {stock.purchasePrice}</Title>
                </TimeContainer>
                <Title>{stock.stockName}</Title>
              </CourseContainer>
            ))}
          </ListCourseContainer>
        </Fragment>
      )}
    </Container>
  )
}
