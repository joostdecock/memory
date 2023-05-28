// Hooks
import { useApp } from 'hooks/use-app.mjs'
import { useTranslation } from 'next-i18next'
// Dependencies
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// Components
import Head from 'next/head'
import Link from 'next/link'
import { PageWrapper, ns as pageNs } from 'components/wrappers/page.mjs'
import { BareLayout, ns as layoutNs } from 'components/layouts/bare.mjs'
import { Popout } from 'components/popout.mjs'
import { WebLink } from 'components/web-link.mjs'
import { PageLink } from 'components/page-link.mjs'
import { TutorialIcon } from 'components/icons.mjs'
// MDX
import IntroEn from 'mdx/about-jing.en.mdx'
import IntroCn from 'mdx/about-jing.cn.mdx'
// Testimonial by Moon
import TestimonialMoonCn, { frontmatter as moonCn }  from 'mdx/testimonial-moon.cn.mdx'
import TestimonialMoonEn, { frontmatter as moonEn }  from 'mdx/testimonial-moon.en.mdx'
// Testimonial by Kate
import TestimonialKateCn, { frontmatter as kateCn }  from 'mdx/testimonial-searles.cn.mdx'
import TestimonialKateEn, { frontmatter as kateEn }  from 'mdx/testimonial-searles.en.mdx'
// Testimonial by Dee
import TestimonialDeeCn, { frontmatter as deeCn }  from 'mdx/testimonial-dee.cn.mdx'
import TestimonialDeeEn, { frontmatter as deeEn }  from 'mdx/testimonial-dee.en.mdx'
// Testimonial by Emily
import TestimonialEmilyCn, { frontmatter as emilyCn }  from 'mdx/testimonial-emily.cn.mdx'
import TestimonialEmilyEn, { frontmatter as emilyEn }  from 'mdx/testimonial-emily.en.mdx'
// Testimonial by Guillaume
import TestimonialGuillaumeCn, { frontmatter as guillaumeCn }  from 'mdx/testimonial-guillaume.cn.mdx'
import TestimonialGuillaumeEn, { frontmatter as guillaumeEn }  from 'mdx/testimonial-guillaume.en.mdx'
// Testimonial by Miya
import TestimonialMiyaCn, { frontmatter as miyaCn }  from 'mdx/testimonial-miya.en.mdx'
import TestimonialMiyaEn, { frontmatter as miyaEn }  from 'mdx/testimonial-miya.cn.mdx'
// Testimonial by Supanat
import TestimonialSupanatCn, { frontmatter as supanatCn }  from 'mdx/testimonial-supanat.cn.mdx'
import TestimonialSupanatEn, { frontmatter as supanatEn }  from 'mdx/testimonial-supanat.en.mdx'

const ns = ['homepage', ...pageNs, ...layoutNs]

const testimonials = [
  {
    cn: { MDX: TestimonialMoonCn, ...moonCn },
    en: { MDX: TestimonialMoonEn, ...moonEn }
  },
  {
    cn: { MDX: TestimonialKateCn, ...kateCn },
    en: { MDX: TestimonialKateEn, ...kateEn }
  },
  {
    cn: { MDX: TestimonialEmilyCn, ...emilyCn },
    en: { MDX: TestimonialEmilyEn, ...emilyEn }
  },
  {
    cn: { MDX: TestimonialMiyaCn, ...miyaCn },
    en: { MDX: TestimonialMiyaEn, ...miyaEn }
  },
  {
    cn: { MDX: TestimonialGuillaumeCn, ...guillaumeCn },
    en: { MDX: TestimonialGuillaumeEn, ...guillaumeEn }
  },
  {
    cn: { MDX: TestimonialSupanatCn, ...supanatCn },
    en: { MDX: TestimonialSupanatEn, ...supanatEn }
  },
  {
    cn: { MDX: TestimonialDeeCn, ...deeCn },
    en: { MDX: TestimonialDeeEn, ...deeEn }
  },
]

const Step = ({ nr, t }) => (
  <div className="w-full text-center border-primary border border-solid rounded bg-primary bg-opacity-10 p-2 mt-8">
    <span className={`block w-12 h-12 rounded-full bg-primary mx-auto -mt-8 m-2 text-center -mb-1
      flex items-center justify-center text-primary-content font-black text-4xl`}>{nr}</span>
    <h4>{t(`homepage:how${nr}`)}</h4>
  </div>
)

const Testimonial = ({ MDX, author, job=false }) => (
  <div className="w-full border border-secondary rounded-lg p-2 px-4 bg-secondary bg-opacity-5 my-2">
    <div className='font-medium text-xl -mb-2 mt-2'>{author}</div>
    <MDX />
    <span className='block font-medium text-lg text-right italic -mt-2'>{job}</span>
  </div>
)

const HomePage = ({ page, locale }) => {

  const app = useApp({page})
  const { t } = useTranslation(ns)

  // Make it easy to check the language
  const cn = (locale === 'cn') ? true : false

  return (
    <PageWrapper app={app}>

      <Head>
        <meta property="og:type" content="article" key="type" />
        <meta
          property="og:description"
          content={t('homepage:banner')}
          key="description"
        />
        <meta property="og:article:author" content="马静" key="author" />
        <meta property="og:locale" content="en_US" key="locale" />
        <title>{t('homepage:banner')}</title>
      </Head>

      <section>
        <div
          style={{
            backgroundImage: "url('/img/splash.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%"
          }}
          className="py-16 lg:p-24 lg:mt-12 lg:py-36"
        >
          <h1 className={`
            bg-base-100 bg-opacity-70
            text-center
            p-4 max-w-4xl mx-auto
            lg:p-12 lg:rounded-lg 
            relative
            `}
          >
            {t('homepage:banner')}
            <Link className="btn btn-accent absolute -bottom-16 right-4 btn-lg -rotate-6" href="/try">
              <TutorialIcon className="w-6 h-6 mr-4 animate-bounce"/>
              {t('homepage:tryNow')}
            </Link>
          </h1>

        </div>
        <div className="max-w-prose m-auto mt-12 px-4">
          <img 
            src="https://place-hold.it/500x500/666" 
            className="mask mask-squircle shadow w-full px-12 md:px-24 lg:w-64 lg:float-left lg:mr-4 lg:mb-2 lg:p-0 max-w-64"
          />
          <div className="mdx text-xl"> 
            {cn ? <IntroCn /> : <IntroEn />}
          </div>
        </div>

        <div className="m-auto mt-24 px-4">
          <h2 className="text-center">{t('homepage:howItWorks')}</h2>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 px-4 max-w-7xl mx-auto">
          <Link href="/try">
            <Step nr={1} t={t} />
          </Link>
          <Step nr={2} t={t} />
          <Step nr={3} t={t} />
        </div>
        <div className="px-4 mx-auto mt-8 text-center">
            <Link className="btn btn-primary btn-lg" href="/try">
              {t('homepage:tryNow')}
            </Link>
        </div>

        <div className="m-auto mt-24 px-4">
          <h2 className="text-center">{t('homepage:testimonials')}</h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-2 max-w-7xl mx-auto px-4">
          {testimonials.map((testimonial, i) => (
            <Testimonial key={i} {...testimonial[locale]} t={t} />
          ))}
        </div>
          
        <div className="px-4 mx-auto my-8 text-center">
            <Link className="btn btn-primary btn-lg" href="/try">
              {t('homepage:tryNow')}
            </Link>
        </div>
      </section>
    </PageWrapper>
  )
}

export default HomePage

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ns)),
      locale,
      page: {
        path: [],
      },
    },
  }
}
