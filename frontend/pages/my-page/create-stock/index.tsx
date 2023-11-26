import { NextPageWithLayout } from '../../../shares/types'
import { CreateTrainsaction } from '../../../components/templates/trainsactions/createTrainsaction'

import type { ReactNode } from 'react'
import { Layout } from '../../../components/layout'

type CreateTrainsactionProps = {}

const CreateTrainsactionPage: NextPageWithLayout<
  CreateTrainsactionProps
> = () => {
  return <div></div>
}

export default CreateTrainsactionPage

CreateTrainsactionPage.getLayout = (page: ReactNode) => <Layout>{page}</Layout>
