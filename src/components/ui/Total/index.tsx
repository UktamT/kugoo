import React from 'react'
import ButtonView from '../ButtonView'
import styles from './Total.module.scss'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../redux/store'

const Total = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price.toString().replace(/\s/g, '')) * item.count,
    0
  )

  return (
    <div className={styles.root}>
      <p>Итого</p>
      <h2 className={styles.price}>{totalPrice.toLocaleString()} ₽</h2>

      <div className={styles.flex}>
        <p className={styles.cost}>Стоимость товаров</p>
        <p className={styles.priceSecond}>{totalPrice.toLocaleString()} ₽</p>
      </div>

      <div className={styles.flex}>
        <p className={styles.cost}>Сумма скидки</p>
        <p className={styles.priceSecond}>0 ₽</p>
      </div>

      <div className={styles.flexLast}>
        <p className={styles.cost}>Итого без учета доставки</p>
        <p className={styles.priceSecond}>{totalPrice.toLocaleString()} ₽</p>
      </div>

      <ButtonView title='Оформить заказ' active={true} />
    </div>
  )
}

export default Total
