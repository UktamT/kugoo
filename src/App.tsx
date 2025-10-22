import { useEffect } from 'react'
import './style.scss'
import Header from './components/layout/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/layout/Footer'
import Cart from './pages/Cart'
import { useDispatch } from 'react-redux'
import { setCartItems } from './redux/slices/cartSlice'
import axios from 'axios'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
  const asyncAddToCart = async () => {
    try {
      const res = await axios.get('http://localhost:3001/cart')
      dispatch(setCartItems(res.data))
    } catch (err) {
      console.error(err);  
    } 
  }

  asyncAddToCart();
  }, [dispatch])
  

  return (
    <div className='appRoot'>
      <Header />
      <main className='content'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes> 
      </main>
        
      <Footer/>
    </div>
  )
}

export default App