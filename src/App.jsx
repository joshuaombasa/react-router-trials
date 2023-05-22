import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Header from './pages/Header'
import Profile from './pages/Profile'
import Contacts from './pages/Contacts'
import Products from './pages/Products'
import History from './pages/History'
import Events from './pages/Events'
import Services from './pages/Services'
import FoodItem from './pages/FoodItem'
import Bidhaa from './pages/Bidhaa'

function App() {

  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route exact path="/about" element={<About/>}>
          <Route exact path="/about/services" element={<Services/>}>
            <Route path="/about/services/:serviceId" element={<Bidhaa/>}>
            </Route>
          </Route>
          <Route path="/about/contacts" element={<Contacts/>}></Route>
          <Route path="/about/events" element={<Events/>}></Route>
          <Route path="/about/history" element={<History/>}></Route>
          <Route exact path="/about/products" element={<Products/>}>
            <Route path="/about/products/:productsId" element={<FoodItem/>}>
            </Route>
          </Route>
        </Route>
        <Route  path="/about/profile" element={<Profile/>}>
        </Route>
      </Routes>

    </div>
  )
}

export default App

