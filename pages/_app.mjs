import 'site/styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import React from 'react'
import { config } from 'site/website.config.mjs'
import i18nConfig from 'site/next-i18next.config.js'
import { Toaster as DefaultToaster } from 'react-hot-toast'

const Website = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <DefaultToaster
      position="bottom-right"
      toastOptions={{
        className: 'bg-base-100 text-base-content',
        success: {
          className: 'bg-success text-success-content',
        },
        error: {
          className: 'bg-error text-error-content',
        },
        loading: {
          className: 'bg-warning text-warning-content',
        },
        custom: {
          className: 'bg-accent text-accent-content',
        },
      }}
    />
  </>
)

export default appWithTranslation(Website, i18nConfig)
