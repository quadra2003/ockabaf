import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({ children, title = 'OCKABA Foundation' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Empowering Korean-American legal professionals through mentorship, education, and opportunity." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
