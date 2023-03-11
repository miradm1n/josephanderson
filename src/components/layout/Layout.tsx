// import { useRouter } from 'next/router'
import React from 'react'


// import { Footer } from '..'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  // const { pathname } = useRouter()
  // const isContactPage = pathname === '/contact'
  return (
    <>
      <main>
        {children}

      </main>

      {/* <Footer /> */}
    </>
  )
}
