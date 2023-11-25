import '../styles/globals.css'
import type { NextPagePropsWithLayout } from '../shares/types'
import { Fragment, ReactNode } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }: NextPagePropsWithLayout<unknown>) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page)
  return getLayout(
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
