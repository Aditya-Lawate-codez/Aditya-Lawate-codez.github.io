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
      <NavBar />
      <Github />
      <AboutMe/>
      <Footer/>
      <Certificates/>
    </>
  )
}

export default App
