
import './App.css'
import Footer from './components/Footer/Footer'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ProductPage from './components/ProductDetailComponent/ProductPage'
import AddPhoto from './components/AddPhoto'
import Reviews from './components/Reviews/Reviews'
import FeedBack from './components/FeedBack'
import Message from './components/Message'
import ReccProducts from './components/ReccProducts'
import {NavigationProvider} from './context/NavigationContext'

function App() {
  
  return (
      <NavigationProvider>
        <NavBar />
        <ProductPage />
        <AddPhoto />
        <Reviews />
        <ReccProducts />
        <Footer />
        <Message />
        <FeedBack />
      </NavigationProvider> 
  )
}

export default App
