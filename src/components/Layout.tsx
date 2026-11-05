import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'
import RevealObserver from './RevealObserver'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <RevealObserver />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
