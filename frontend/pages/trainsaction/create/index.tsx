import { SimpleLayout } from '../../../components/layout/simpleLayout'
import { CreateTrainsaction } from '../../../components/templates/trainsactions/createTrainsaction'
import { NextPageWithLayout } from '../../../shares/types'
import { ReactNode } from 'react'
import { CreateStockRequest } from '../../../shares/types/stocks'
import { apiClient } from '../../../shares/apiClient'
import { useRouter } from 'next/router'

type CreateTrainsactionProps = {}

const CreateTrainsactionPage: NextPageWithLayout<
  CreateTrainsactionProps
> = () => {
  const router = useRouter()
  const handleSubmit = async (trainsaction: CreateStockRequest) => {
    const newTrainsaction = {
      ...trainsaction,
      isDiscipline: !!trainsaction.isDiscipline
    }

    console.log('newTrainsaction:', newTrainsaction)
    const { data } = await apiClient().post('/stocks', newTrainsaction)
    router.push('/trainsaction.html')
  }
  return <CreateTrainsaction handleSubmit={handleSubmit} />
}

export default CreateTrainsactionPage

CreateTrainsactionPage.getLayout = (page: ReactNode) => (
  <SimpleLayout>{page}</SimpleLayout>
)
