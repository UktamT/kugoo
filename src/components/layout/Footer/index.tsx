import React from 'react'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.firstBlock}>
        <div className="container">
          <div className={styles.first}>
          <h5 className={styles.title}>Оставьте свою почту и станьте первым, <br />
         кто получит скидку на новые самокаты</h5>

         <form>
          <input className={styles.input} type="text" placeholder='Введите Ваш email' />
          <button className={styles.btn} type='submit'>Подписаться</button>
         </form>
          </div>
          
        </div>      
      </div>

       <div className={styles.footerMiddle}>
      <div className={styles.footerMiddle__left}>
        {/* Первый блок */}
        <div>
          <h1 className={styles.footerMiddle__firstTitle}>Каталог Товаров</h1>
          <ul>
            <li>
              <a href="#" className={styles.footerMiddle__firstLink}>Электросамокаты</a>
            </li>
            <li>
              <a href="#" className={styles.footerMiddle__firstLink}>Электроскутеры</a>
            </li>
            <li>
              <a href="#" className={styles.footerMiddle__firstLink}>Электровелосипеды</a>
            </li>
          </ul>
        </div>

        {/* Второй блок */}
        <div>
          <h1 className={styles.footerMiddle__firstTitle}>Покупателям</h1>
          <ul>
            <li>
              <a href="#" className={styles.footerMiddle__firstLink}>Сервисный центр</a>
            </li>
            <li>
              <a href="#" className={styles.footerMiddle__firstLink}>Доставка и оплата</a>
            </li>
            <li>
              <a href="#" className={styles.footerMiddle__firstLink}>Рассрочка</a>
            </li>
            <li>
              <a href="#" className={styles.footerMiddle__firstLink}>Тест-драйв</a>
            </li>
          </ul>
        </div>

        {/* Третий блок */}
        <div>
          <h1 className={styles.footerMiddle__firstTitle}>О нас</h1>
          <ul>
            <li><a href="#" className={styles.footerMiddle__firstLink}>Блог</a></li>
            <li><a href="#" className={styles.footerMiddle__firstLink}>Сотрудничество</a></li>
            <li><a href="#" className={styles.footerMiddle__firstLink}>Контакты</a></li>
            <li><a href="#" className={styles.footerMiddle__firstLink}>Акции</a></li>
          </ul>
        </div>
      </div>

      {/* Правый блок */}
      <div>
        <div className={styles.footerMiddle__secondFirst}>
          <h2 className={styles.footerMiddle__secondTitle}>Контакты</h2>
          <p className={styles.footerMiddle__secondSubtitle}>Заказать звонок</p>
        </div>

        <div className={styles.footerMiddle__secondSecondBlock}>
          <div>
            <p className={styles.footerMiddle__secondCall}>Call-центр</p>
            <h4 className={styles.footerMiddle__secondSecondSubtitle}>+7 (800) 505-54-61</h4>
            <p className={styles.footerMiddle__secondCallCenter}>Пн-Вс 10:00 - 20:00</p>
          </div>
          <div>
            <p className={styles.footerMiddle__secondCall}>Call-центр</p>
            <h4 className={styles.footerMiddle__secondSecondSubtitle}>+7 (800) 505-54-61</h4>
            <p className={styles.footerMiddle__secondCallCenter}>Пн-Вс 10:00 - 20:00</p>
          </div>
        </div>

        <div className={styles.footerMiddle__thirdBlock}>
          <div>
            <h5 className={styles.footerMiddle__thirdBlockTitle}>
              Магазин в Москве ул. <br/> Ткацкая, 5 стр. 16
            </h5>
            <p className={styles.footerMiddle__thirdBlockSubtitle}>+7 (499) 406 15 87</p>
          </div>
          <div>
            <h5 className={styles.footerMiddle__thirdBlockTitle}>
              Магазин в Москве ул. <br/> Ткацкая, 5 стр. 16
            </h5>
            <p className={styles.footerMiddle__thirdBlockSubtitle}>+7 (499) 406 15 87</p>
          </div>
          <div>
            <h5 className={styles.footerMiddle__thirdBlockTitle}>
              Магазин в Москве ул. <br/> Ткацкая, 5 стр. 16
            </h5>
            <p className={styles.footerMiddle__thirdBlockSubtitle}>+7 (499) 406 15 87</p>
          </div>
        </div>
      </div>
    </div>

    </footer>
  )
}

export default Footer