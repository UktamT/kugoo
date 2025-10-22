import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, setCartItems } from '../../../redux/slices/cartSlice'
import type { RootState } from '../../../redux/store'
import axios from 'axios'

import styles from './CartItem.module.scss'
import busket from '../../../assets/busket.svg' 

const CartItem = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()

  const deleteFromCart = async (id: number | string) => {
    
    const itemToRemove = cartItems.find(item => item.id === id)
    
    dispatch(removeFromCart(id))

    try {
      await axios.delete(`http://localhost:3002/cart/${id}`)
    } catch (err) {
      console.log('Ошибка', err)
      
      if (itemToRemove) {
        
        dispatch(setCartItems([...cartItems.filter(item => item.id !== id), itemToRemove]))
      }
    }
  }

  interface Scooter {
    id: number | string
    image: string
    title: string
    mAh: string
    speed: string
    power: string
    limit: string
    checkpoint: string
    price: number | string
    ready: string
    recomendation?: string
    count: number
  }

  return (
    <div>
      {cartItems.map((i: Scooter) => (
        <div key={i.id} className={styles.root}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img className={styles.image} src={i.image} alt={i.title} />
            <div>
              <p className={styles.title}>{i.title}</p>
              <div className={styles.isReady}>
                <p className={i.ready === 'true' ? styles.colorGreen : styles.colorRed}></p>
                <p className={styles.isIt}>
                  {i.ready === 'true' ? 'В наличии' : 'Нету в наличии'}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.flex}>
            <p className={styles.count}>{i.count}</p>
            <p className={styles.price}>{i.price} ₽</p>
            <img
              onClick={() => deleteFromCart(i.id)}
              src={busket}
              alt="Удалить"
              className={styles.trashIcon}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartItem
