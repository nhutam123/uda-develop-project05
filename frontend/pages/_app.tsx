import '../styles/globals.css'
import type { NextPagePropsWithLayout } from '../shares/types'
import { Fragment, ReactNode } from 'react'

function MyApp({ Component, pageProps }: NextPagePropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page)
  return getLayout(
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
