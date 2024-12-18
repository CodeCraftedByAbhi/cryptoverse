import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Exchanges from './components/Exchanges'
import AboutUs from './components/AboutUs'
import Coins from './components/Coins'

function App() {
  return (
    <>
      <Router>
        <Navbar /> {/* Self-closing tag */}
        <Routes>
          <Route path='/' element={<Home />} /> {/* Self-closing tags */}
          <Route path='/exchanges' element={<Exchanges />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/coins' element={<Coins />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
