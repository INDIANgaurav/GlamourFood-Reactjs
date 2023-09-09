import React from 'react'
import Navbar from './Navbar'
import Categorymenu from './Categorymenu'
import FoodItems from './FoodItems'
import Cart from './Cart'

const Home = () => {
  return (
 <>
 <Navbar/>
 <Categorymenu/>
 <FoodItems/>
 <Cart/> 
 
 </>
  )
}

export default Home