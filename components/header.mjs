import { useState, useEffect } from 'react'
import { ThemePicker, ns as themeNs } from 'components/theme-picker/index.mjs'
import { LocalePicker, ns as localeNs } from 'components/locale-picker/index.mjs'
import { CloseIcon, MenuIcon, SearchIcon } from 'components/icons.mjs'
import { Ribbon } from 'components/ribbon.mjs'
import Link from 'next/link'

export const ns = [...new Set([...themeNs, ...localeNs])]

export const Header = ({ app, setSearch }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const curScrollPos = typeof window !== 'undefined' ? window.pageYOffset : 0
        if (curScrollPos >= prevScrollPos) {
          if (show && curScrollPos > 20) setShow(false)
        } else setShow(true)
        setPrevScrollPos(curScrollPos)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos, show])

  return (
    <header
      className={`
      fixed bottom-0 lg:bottom-auto lg:top-0 left-0
      bg-neutral
      w-full
      z-30
      transition-transform
      ${
        show || app.state.loading
          ? ''
          : 'fixed bottom-0 lg:top-0 left-0 translate-y-20 lg:-translate-y-20'
      }
      drop-shadow-xl
    `}
    >
      <div className="m-auto md:px-8">
        <div className="p-0 flex flex-row gap-2 justify-between text-neutral-content items-center">
          <div className="flex flex-row items-center">
            <button
              className={`
                btn btn-sm
                text-neutral-content bg-transparent
                lg:hidden
                h-12
              `}
              onClick={app.togglePrimaryMenu}
            >
              {app.primaryMenu ? <CloseIcon /> : <MenuIcon />}
            </button>
            <div className="hidden lg:block lg:pl-2">
              <Link href="/" className="text-neutral-content font-bold">
                <button className={`h-12 group border-0 inline-flex items-center px-3 text-base
                    text-neural-content hover:bg-secondary hover:bg-opacity-50`}
                >
                  FIXME: We need a name
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center lg:hidden">
            FIXME: We need a name
          </div>
          <div className="hidden lg:flex lg:flex-row gap-2 grow"></div>
          <div className="hidden lg:flex flex-row items-center">
            <ThemePicker app={app} />
            <LocalePicker app={app} />
          </div>
        </div>
      </div>
      <Ribbon loading={app.state.loading} theme={app.theme} />
    </header>
  )
}
