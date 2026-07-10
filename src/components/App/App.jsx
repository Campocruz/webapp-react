// Import StyleSheet
import './App.css'

// Import from React Router
import { BrowserRouter, Routes, Route } from 'react-router'

// Import provider from movies context
import { MoviesProvider } from '../../contexts/MovieContext'

// Import Layout page
import DefaultLayout from '../../layouts/DefaultLayout'
import AdminLayout from '../../layouts/AdminLayout'

// Import web page
import HomePage from '../../pages/guest/HomePage'
import MovieDetail from '../../pages/guest/MovieDetail'
import About from '../../pages/guest/About'
import Contact from '../../pages/guest/Contact'
import NotFound from '../../pages/guest/NotFound'

// Import admin page
import AdminHomePage from '../../pages/admin/AdminHomePage'
import CreateBookPage from '../../pages/admin/CreateBookPage'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <MoviesProvider>
          <Routes>
            {/* Admin Route */}
            <Route element={<AdminLayout />}>
              <Route path='/admin' element={<AdminHomePage />} />
              <Route path='/admin/books/create' element={<CreateBookPage />} />
            </Route>

            {/* Guest Route */}
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/movies/:id' element={<MovieDetail />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>

          </Routes>
        </MoviesProvider>
      </BrowserRouter >
    </>
  )
}