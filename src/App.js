import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
        <Navbar />
      <Hero />
    </>
  )
}
export default App;