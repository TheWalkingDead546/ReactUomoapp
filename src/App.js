import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Hero from "./components/Hero/Hero";
import ProductContainer from "./components/ProductContainer/ProductContainer";
import TopCategory from "./components/TopCategory/TopCategory";
import TopCollection from "./components/TopCollection/TopCollection";
function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <TopCategory />
        <TopCollection />
    </>
  )
}
export default App;