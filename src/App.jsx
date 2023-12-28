import './App.css'
import NavBar from './components/NavBar'
import Github from './components/github'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Certificates from './components/certificates'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
function App() {

  return (
    <>
      {/* < NavBar />
      <Github />
      <AboutMe/>
      <Footer/>
      <Certificates/> */}
      <NavBar />
      <Router>
        <Routes>
          <Route element={<Github />} path='/Github' />
          <Route element={<AboutMe />} path='/Aboutme' />
          <Route element={<Certificates />} path='/Certis' />
          <Route element={<AboutMe />} path='/Aboutme' />
        </Routes>
      </Router>
    </>
  )
}

export default App
