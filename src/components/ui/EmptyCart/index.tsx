import React from 'react'
import ButtonView from '../ButtonView'

import styles from './EmptyCart.module.scss'

import empty from '../../../assets/Image.svg'

const EmptyCart = () => {
  return (
    <div className='container'>
      <div className={styles.content}>
        <img src={empty} alt="" />
        <h2 className={styles.title}>Ваша корзина пуста</h2>
        <p className={styles.subtitle}>Добавьте в нее товары из каталога</p>
        <ButtonView active={true} title={'Перейти в каталог'}/>
      </div>
    </div>
  )
}

export default EmptyCart