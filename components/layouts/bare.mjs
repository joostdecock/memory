import { useRouter } from 'next/router'

export const ns = []

export const BareLayout = ({ app, children = [] }) => (
  <>
    {children}
  </>
)
