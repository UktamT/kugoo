import React from 'react'

import styles from './ButtonView.module.scss'

interface ButtonViewProps {
  title: string
  onClick?: () => void
  active?: boolean
}

const ButtonView = ({title, onClick, active}: ButtonViewProps) => {
  return (
    <button onClick={onClick} className={active ? styles.root : styles.unactive}>{title}</button>
  )
}

export default ButtonView