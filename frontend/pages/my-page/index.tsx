import { Layout } from '../../components/layout/index'
import type { ReactNode } from 'react'

import { useEffect, useState } from 'react'
import { NextPageWithLayout } from '../../shares/types'
import { getStocks } from '../../services/stocks/stocks-api'
import { StockTemplate } from '../../components/templates/stock'
import { Stock } from '../../shares/types/stocks'

type StockPageProps = {
  items: []
}

const MypagePage: NextPageWithLayout<StockPageProps> = (props) => {
  const [stocks, setStocks] = useState<Stock[]>([])
  const [token, setToken] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const getlistStocks = async (idToken: string) => {
    setIsLoading(true)
    const stocks = await getStocks(idToken)
    setStocks(stocks)
    setIsLoading(false)
  }

  useEffect(() => {
    const idToken = localStorage.getItem('token')
    setToken(idToken?.toString() || '')
    if (idToken) {
      getlistStocks(idToken.toString())
    }
  }, [])

  return (
    <StockTemplate
      {...{
        stocks: stocks,
        isLoading: isLoading
      }}
    />
  )
}

MypagePage.getLayout = (page: ReactNode) => <Layout>{page}</Layout>

export default MypagePage
