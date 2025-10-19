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

    </footer>
  )
}

export default Footer