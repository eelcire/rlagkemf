import React, { Component } from 'react'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Header />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App