// Import StyleSheet
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router'

import DefaultLayout from '../../layouts/DefaultLayout'
import AdminLayout from '../../layouts/AdminLayout'

import HomePage from '../../pages/web/HomePage'
import MovieDetail from '../../pages/web/MovieDetail'
import About from '../../pages/web/About'
import Contact from '../../pages/web/Contact'

import AdminHomePage from '../../pages/admin/AdminHomePage'
import CreateBookPage from '../../pages/admin/CreateBookPage'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/movies/:id' element={<MovieDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route path='/admin' element={<AdminHomePage />} />
            <Route path='/admin/create_book' element={<CreateBookPage />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}