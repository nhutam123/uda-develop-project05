import { Button } from '../../atoms/button'
import { Colors } from '../../../shares/const/colors'
import { useRouter } from 'next/router'
import { Stock } from '../../../shares/types/stocks'
import { FC, Fragment } from 'react'
import { Styles } from './styles'
import { Loading } from '../../atoms/loading'

type TrainsactionTemplateProps = {
  data: Stock[]
  isLoading?: boolean
}
const {
  Container,
  CourseContainer,
  Header,
  ListCourseContainer,
  Title,
  TimeContainer
} = Styles

const { BLUE } = Colors

export const TrainsactionTemplate: FC<TrainsactionTemplateProps> = (props) => {
  const { data, isLoading } = props
  const router = useRouter()

  const handleClick = () => {
    router.push('trainsaction/create.html')
  }
  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h1>Trainsaction</h1>
          <Button
            backgroundColor={BLUE}
            text="Create Trainsaction"
            onClick={handleClick}
          />
          <Fragment>
            {data.length ? (
              <div>
                <Header>{}</Header>
              </div>
            ) : (
              <Header>No lessons registered yet</Header>
            )}
            <ListCourseContainer>
              {data.map((stock) => (
                <CourseContainer key={stock.stockId}>
                  <TimeContainer>
                    <Title>{stock.stockName}</Title>
                    <Title> {stock.purchasePrice}</Title>
                    <Title>{stock.profitTakingPrice}</Title>
                    <Title>{stock.stopLossPrice}</Title>
                  </TimeContainer>
                </CourseContainer>
              ))}
            </ListCourseContainer>
          </Fragment>
        </div>
      )}
    </Container>
  )
}
