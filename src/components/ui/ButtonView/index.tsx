import React from 'react'

import styles from './ButtonView.module.scss'

interface ButtonViewProps {
  title: string
}

const ButtonView = ({title}: ButtonViewProps) => {
  return (
    <button className={styles.root}>{title}</button>
  )
}

export default ButtonView