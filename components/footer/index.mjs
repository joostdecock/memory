import { Ribbon } from 'components/ribbon.mjs'

export const Footer = ({ app }) => {

  return (
    <footer className="bg-neutral">
      <Ribbon loading={app.loading} theme={app.theme} />
      <p className="text-center text-neutral-content py-8">Copyright 2023 马静</p>
    </footer>
  )
}
