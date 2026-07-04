import { Outlet } from "react-router"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

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