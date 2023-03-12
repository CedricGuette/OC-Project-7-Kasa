import './styles/style.scss'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import Rent from './components/pages/Rent'
import Error from './components/pages/Error'

function App() {
  return (
    <div className='pageBody'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<AboutUs />} />
        <Route path="/rent/:id" element={<Rent />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
