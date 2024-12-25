import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Blank from './components/Blank'

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Blank />
    </main>
  )
}

export default App
