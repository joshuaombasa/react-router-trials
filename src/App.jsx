import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Header from './components/Header'
import Profile from './components/Profile'
import Contacts from './components/Contacts'
import Products from './components/Products'
import History from './components/History'
import Events from './components/Events'
import Services from './components/Services'
import FoodItem from './components/FoodItem'
import Service from './assets/Service'

function App() {

  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route exact path="/about" element={<About/>}>
          <Route exact path="/about/serices" element={<Services/>}>
            <Route path="/about/serices/:serviceId" element={<Service/>}></Route>
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

