import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Stock } from '../../../../shares/types/stocks'
import { StocksProps } from '../types'

export const useStudent = (props: StocksProps) => {
  const [url, setUrl] = useState('')
  const [courseTitle, setCourseTitle] = useState('')
  const { stocks, isLoading } = props
  const router = useRouter()
  const { title, videoUrl } = router.query

  // const handleClick = (course: Stock) => {
  //   console.log('tam')
  //   router.push({
  //     pathname: '/stock',
  //     query: { videoUrl: course.videoUrl, title: course.name }
  //   })
  // }
  // useEffect(() => {
  //   if (!videoUrl && !title) {
  //     setUrl(stocks[0]?.videoUrl || '')
  //     setCourseTitle(stocks[0]?.name || '')
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [stocks.length, videoUrl])

  return {
    url,
    isLoading,
    stocks
  }
}
