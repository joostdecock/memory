// Hooks
import { useApp } from 'hooks/use-app.mjs'
import { useTranslation } from 'next-i18next'
// Dependencies
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// Components
import Head from 'next/head'
import { PageWrapper } from 'components/wrappers/page.mjs'
import { BareLayout } from 'components/layouts/bare.mjs'
import { Popout } from 'components/popout.mjs'
import { WebLink } from 'components/web-link.mjs'
import { PageLink } from 'components/page-link.mjs'

const title = 'FIXME: Title here'
const namespaces = ['homepage']

const HomePage = (props) => {

  const app = useApp(props)
  const { t } = useTranslation(namespaces)

  return (
    <PageWrapper app={app}>

      <Head>
        <meta property="og:type" content="article" key="type" />
        <meta
          property="og:description"
          content="FIXME: Description here"
          key="description"
        />
        <meta property="og:article:author" content="马静" key="author" />
        <meta property="og:locale" content="en_US" key="locale" />
        <title>{title}</title>
      </Head>

      <section>
        <div className="mx-auto px-8 flex flex-col items-center justify-center py-48 lg:min-h-0 lg:py-64">
          <div className="flex flex-col items-center max-w-4xl">
            <h1 className={`
              text-4xl font-black text-right px-4
              sm:text-6xl
              md:text-7xl px-6
              lg:px-8
              `}
            >
              {t('hello')}
            </h1>
            <p className="text-center">
              <PageLink href="/typography" txt="Show styles" />
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

export default HomePage

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, null, namespaces)),
      page: {
        path: [],
      },
    },
  }
}
