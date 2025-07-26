import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Overview from './Components/Overview/Overview'
import Repositories from './Components/Repositories/Repositories'
import Project from './Components/Projects/Project'
import Packages from './Components/Packages/Packages'
import Footer from './Components/footor/Footor'
import Star from './Components/Stars/Star'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/start" element={<Star />} />


      </Routes>
      <Footer />
    </Router>
  )
}

export default App
