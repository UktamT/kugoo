import React from 'react'
import polygon from '../../../assets/Polygon 2.svg'
import search from '../../../assets/search.svg'
import upDown from '../../../assets/upDown.svg'

import styles from './SearchInput.module.scss'

const Search = () => {
  const [selectedOption, setSelectedOption] = React.useState(false)
  const [selectedText, setSelectedText] = React.useState('Везде')

  const handleSelectedOption = () => {
    setSelectedOption(!selectedOption)
  }

  return (
    <>
      <div className={styles.searchBox}>
          <div onClick={() => handleSelectedOption()} className={styles.searchSelect}>
            <span>{selectedText}</span>
            <img src={selectedOption ? upDown : polygon} alt="arrow" />
        </div>

        <input
          type="text"
          placeholder={`Искать ${selectedText} KUGOO`}
          className={styles.searchInput}
        />

        <button className={styles.searchBtn}>
          <img src={search} alt="search" />
        </button>


      <div className={selectedOption ? styles.optionsActive : styles.optionsDisactive}>
        <p onClick={() => setSelectedText('Самокаты')} className={styles.optionFirst}>Самокаты</p>
        <p onClick={() => setSelectedText('Аксессуары')} className={styles.option}>Аксессуары</p>
      </div>
      </div>

      
    </>
    
  )
}

export default Search