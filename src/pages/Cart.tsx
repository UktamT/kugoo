import EmptyCart from '../components/ui/EmptyCart'
import '../styles/cart.scss'

import home from '../assets/home.svg'
import InfoAboutItem from '../components/ui/InfoAboutItem'

import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import CartItem from '../components/ui/CartItem'
import Total from '../components/ui/Total'

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <div className='container'>
      <div className='flex'>
        <img src={home} alt="" />
        <p>
          <span className='span'>Главная /</span>
          <span className='span'>Каталог /</span>
          <span>Моя корзина</span>
        </p>
      </div>

      <h6 className='title'>Моя корзина</h6>


      <p className='count'>Товаров в корзине: {cartItems.length}</p>

       

      {cartItems.length === 0 ? <EmptyCart /> :
      (
        <div className='flexPrice'>
          <div>
            <InfoAboutItem />
            <CartItem />
          </div>

          <Total/>
        </div>
        
      )
       
       }
    </div>
  )
}

export default Cart
