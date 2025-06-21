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
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#0047A0" />
      </Head>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
