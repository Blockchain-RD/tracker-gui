import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/header'
import Visor from './components/visor'

function App() {

  return (
    <div className="App">
      <Header />
      <Visor />
    </div>
  )
}

export default App
