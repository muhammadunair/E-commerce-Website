import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import Product from './product'
import Contact from './contact'
import About from './about'
const Rout = ({product , setProduct , detail , view , close , setClose}) => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose}/> }/>
            <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose}/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </>
  )
}

export default Rout