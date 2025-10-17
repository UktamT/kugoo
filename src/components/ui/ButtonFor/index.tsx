import React from 'react'

interface ButtonForProps {
  title: string
  onClick: () => void
}

const ButtonFor = ({title, onClick}: ButtonForProps) => {
  return (
    <button onClick={onClick}>{title}</button>
  )
}

export default ButtonFor