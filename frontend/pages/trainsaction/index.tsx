import { Layout } from '../../components/layout/index'
import { ReactNode, useState, useEffect } from 'react'
import { NextPageWithLayout } from '../../shares/types'
import { TrainsactionTemplate } from '../../components/templates/trainsactions'
import { GetTrainsactionResponse } from '../../shares/mooc'
import { Stock } from '../../shares/types/stocks'
import { apiClient } from '../../shares/apiClient'

type TrainsactionPageProps = {
  items: []
}

const TrainsactionPage: NextPageWithLayout<TrainsactionPageProps> = () => {
  const [stocks, setStocks] = useState<Stock[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const getlistStocks = async () => {
    setIsLoading(true)
    const { data } = await apiClient().get('/stocks')
    setStocks(data.items)
    setIsLoading(false)
  }
  useEffect(() => {
    getlistStocks()
  }, [])
  return <TrainsactionTemplate data={stocks} isLoading={isLoading} />
}

TrainsactionPage.getLayout = (page: ReactNode) => <Layout>{page}</Layout>

export default TrainsactionPage
