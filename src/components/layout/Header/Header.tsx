import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'

import viber from '../../../assets/viber 1.svg'
import whatsapp from "../../../assets/whatsapp.svg";
import telegram from "../../../assets/telegram.svg";
import weigth from '../../../assets/weight.svg'
import heart from '../../../assets/heart.svg'
import cart from '../../../assets/cart.svg'
import Search from '../../ui/SearchInput';
import close from '../../../assets/close.png'
import plus from '../../../assets/plus.svg'

const Header = () => {
  const [catalog, setCatalog] = React.useState(false)
  const [service, setService] = React.useState(false)

  const handleCatalog = () => {
    setCatalog(!catalog)
  }

  const handleService = () => { 
    setService(!service)
  }

  return (
    
    <header className={styles.header}>
      <div className="container">
      <div className={catalog || service ? styles.overlay : styles.overlayDisactive}></div>
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
        

        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <p className={styles.phone}>+7 (800) 505-54-61</p>

          <img onClick={() => handleService()} style={{width: '20px', cursor: 'pointer', height: '20px', marginTop: '5px'}} src={plus} alt="" />
        </div>

      </div>

      <div className={styles.headerSecond}>
        <Link to={'/'}>
          <h1 className={styles.mainTitle}>
            KUGOO
          </h1>
        </Link>
        

        <button onClick={() => handleCatalog()} className={styles.catalogBtn}>
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

          <Link to={'/cart'}>
            <div className={styles.cart}>
              <img src={cart} alt="" />
              <p className={styles.cartTitle}>Корзина</p>
            </div>
          </Link>
          
        </div>
      </div>

      </div>

      <div className={styles.headerThird}>
        <div className="container">
          <div className={styles.nav}>
            <p className={styles.thirdText}>О магазине</p>
            <p className={styles.thirdText}>Доставка и оплата <span className={styles.installment}>Доступна рассрочка</span></p>
            <p className={styles.thirdText}>Тест-драйв</p>
            <p className={styles.thirdText}>Блог</p>
            <p className={styles.thirdText}>Контакты</p>
            <p className={styles.thirdText}>Акции <span className={styles.procent}>%</span></p>
          </div>  
        </div>
        
      </div>

      <div className={catalog ? styles.catalogActive : styles.catalog}>

        <div className={styles.first}>
          <p className={styles.firstTitleMain}>
            Электросамокаты
          </p>
          <p className={styles.firstTitle}>
            Электроскутеры
          </p>
          <p className={styles.firstTitle}>
            Электровелосипеды
          </p>
          <p className={styles.firstTitle}>
            Робот-пылесосы
          </p>
          <p className={styles.firstTitle}>
            Весы
          </p>
        </div>

        <div>
          <h4 className={styles.properties}>Особенности</h4>

          <p className={styles.secondText}>Внедорожный</p>
          <p className={styles.secondText}>Городской</p>
          <p className={styles.secondText}>Зимний</p>
          <p className={styles.secondText}>С сиденьем</p>
          <p className={styles.secondText}>Без сиденья</p>
        </div>

        <div>
          <h4 className={styles.properties}>Для кого</h4>

          <p className={styles.secondText}>Для детей и подростков</p>
          <p className={styles.secondText}>Для взрослых</p>
          <p className={styles.secondText}>Для пенсионеров</p>
        </div>

        <img onClick={() => handleCatalog()} style={{width: '10px', height: '10px', cursor: 'pointer'}} src={close} alt="" />
      </div>

      <div className={service ? styles.service : styles.serviceDisactive}>
        <img onClick={() => handleService()} style={{width: '10px', cursor: 'pointer', height: '10px', position: 'absolute',top: '16px', right: '10px'}} src={close} alt="" />
        <div className={styles.serviceFirst}>
          <p className={styles.text}>Сервисный центр</p>
          <p className={styles.telephone}>+ 7 (499) 350 76 92</p>
        </div>

        <div className={styles.serviceSecond}>
          <p className={styles.text}>Оптовый отдел</p>
          <p className={styles.telephone}>+7 (499) 281-64-52</p>
          <p className={styles.time}>пн-сб 10:00 - 19:00</p>
        </div>

        <div className={styles.serviceThird}>
          <p className={styles.text}>Отдел рекламаций и претензий</p>
          <p className={styles.telephone}>+7 (499) 281-64-52</p>
          <p className={styles.time}>ср-вс с 10:00 до 19:00</p>
        </div>
        
      </div>
    </header>
    
  )
}

export default Header