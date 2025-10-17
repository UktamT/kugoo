import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setScooters } from '../../../redux/slices/scootersSlice'

import weight from '../../../assets/weight.svg'
import motor from '../../../assets/motor.svg'
import speed from '../../../assets/speed.svg'
import speedometer from '../../../assets/speedometer.svg'
import timer from '../../../assets/timer.svg'

import styles from './Scooter.module.scss'

const ScooterCart = () => {
  const dispatch = useDispatch()
  const scooters = useSelector((state: any) => state.scooters.items)

  useEffect(() => {
    axios.get('https://68ee7b85df2025af7803da1f.mockapi.io/kugoos')
    .then(res => dispatch(setScooters(res.data)))
  })

  return (
    <div className="container">
      <div className={styles.root}>
      {scooters.map((scooters: any) => (
        <div className={styles.card} key={scooters.id}>
          <div className={styles.specifications}>
            <p>{scooters.checkpoint}</p>
            <img src={weight} alt="" />
          </div>
          <img className={styles.image} src={scooters.image} alt="" />
          <h3 className={styles.title}>{scooters.title}</h3>
          <div className={styles.atributes}>
            <div style={{display: 'flex', columnGap: '20px', alignItems: 'center' }}>

              <div>
                <span className={styles.span}>
                  <img src={motor} alt="" />
                  <p className={styles.p}>{scooters.mAh}</p>
                </span>
                <span style={{paddingTop: '10px'}} className={styles.span}>
                  <img src={speedometer} alt="" />
                  <p className={styles.p}>{scooters.speed}</p>
                </span>
                
              </div>

              <div>
                <span className={styles.span}>
                  <img className={styles.rightSide} src={speed} alt="" />
                  <p className={styles.p}>{scooters.power}</p>
                </span>
                <span style={{paddingTop: '10px'}} className={styles.span}>
                  <img className={styles.rightSideLast} src={timer} alt="" />
                  <p className={styles.p}>{scooters.limit}</p>
                </span>
              </div>

            </div>
            
            
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default ScooterCart