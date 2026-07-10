import { Outlet } from "react-router"
import Header from '../components/web/Header/Header'
import Footer from '../components/web/Footer/Footer'

export default function DefaultLayout() {

  return (
    <>
      <Header />

      <main className="min-vh-100">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}