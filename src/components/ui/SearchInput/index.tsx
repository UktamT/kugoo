import React from 'react'
import polygon from '../../../assets/Polygon 2.svg'
import search from '../../../assets/search.svg'

import styles from './SearchInput.module.scss'

const Search = () => {
  return (
    <div className={styles.searchBox}>
        <div className={styles.searchSelect}>
          <span>Везде</span>
          <img src={polygon} alt="arrow" />
      </div>

      <input
        type="text"
        placeholder="Искать самокат KUGOO"
        className={styles.searchInput}
      />

      <button className={styles.searchBtn}>
        <img src={search} alt="search" />
      </button>
    </div>
  )
}

export default Search