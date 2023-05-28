import Head from 'next/head'
import { Header } from 'components/header/index.mjs'
import { Footer } from 'components/footer/index.mjs'

export const ns = ['locales']

export const LayoutWrapper = ({ app, children = [] }) => {
  return (
    <div
      className={`
    flex flex-col justify-between
    min-h-screen
    bg-base-100
    `}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header app={app} />
      <main className="grow">{children}</main>
      <Footer app={app} />
    </div>
  )
}
