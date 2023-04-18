import './styles/style.scss'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/utils/context/ThemeProvider'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import Rent from './components/pages/Rent'
import Error from './components/pages/Error'
import FreeSpace from './components/FreeSpace'

function App() {
  return (
    <div className='pageBody'>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<AboutUs />} />
          <Route path="/rent/:id" element={<Rent />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <FreeSpace />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App
