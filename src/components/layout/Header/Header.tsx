import React from 'react'
import styles from './Header.module.scss'

import viber from '../../../assets/viber 1.svg'
import whatsapp from "../../../assets/whatsapp.svg";
import telegram from "../../../assets/telegram.svg";
import weigth from '../../../assets/weight.svg'
import heart from '../../../assets/heart.svg'
import cart from '../../../assets/cart.svg'
import Search from '../../ui/SearchInput';

const Header = () => {

  return (
    <header className={styles.header}>
      <div className="container">

      <div className={styles.headerFirst}>

        <div className={styles.leftSide}>

        <div className={styles.text}>
          <p className={styles.links}>Сервис</p>
          <p className={styles.links}>Сотрудничество</p>
          <p className={styles.links}>Заказать звонок</p>
        </div>

        <div className={styles.icons}>
          <img src={viber} alt="" />
          <img src={whatsapp} alt="" />
          <img className={styles.icon} src={telegram} alt="" />
        </div>

        </div>
        

        <div>
          <p className={styles.phone}>+7 (800) 505-54-61</p>
          <img src="" alt="" />
        </div>

      </div>

      <div className={styles.headerSecond}>
        <h1>
          KUGOO
        </h1>

        <button className={styles.catalogBtn}>
          <span className={styles.burger}>
            <span></span>
            <span></span>
            <span></span>
          </span>
          Каталог
        </button>

        <Search />

        <div className={styles.rightSide}>
          <img src={weigth} alt="" />
          <img src={heart} alt="" />
          <div className={styles.cart}>
            <img src={cart} alt="" />
            <p>Корзина</p>
          </div>
        </div>
      </div>

      </div>

      <div className={styles.headerThird}>
        <div className="container">
          <div className={styles.nav}>
            <p>О магазине</p>
            <p>Доставка и оплата <span className={styles.installment}>Доступна рассрочка</span></p>
            <p>Тест-драйв</p>
            <p>Блог</p>
            <p>Контакты</p>
            <p>Акции <span className={styles.procent}>%</span></p>
          </div>  
        </div>
        
      </div>
    </header>
  )
}

export default Header