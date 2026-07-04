// Import StyleSheet
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router'
import DefaultLayout from '../../layouts/DefaultLayout'
import HomePage from '../../pages/HomePage'
import MovieDetail from '../../pages/MovieDetail'
import About from '../../pages/About'
import Contact from '../../pages/Contact'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/:id' element={<MovieDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}