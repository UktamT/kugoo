import React from 'react'

import styles from './InfoAboutItem.module.scss'

const InfoAboutItem = () => {
  return (
    <div className={styles.root}>
      <p>Товар</p>
      <div className={styles.flex}>
        <p>Количество</p>
        <p>Сумма</p>
        <p>Удалить</p>
      </div>
    </div>
  )
}

export default InfoAboutItem