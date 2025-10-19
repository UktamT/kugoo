import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setScooters } from '../../../redux/slices/scootersSlice'

import CardLoading from '../../ui/CardLoading'

import weight from '../../../assets/weight.svg'
import motor from '../../../assets/motor.svg'
import speed from '../../../assets/speed.svg'
import speedometer from '../../../assets/speedometer.svg'
import timer from '../../../assets/timer.svg'
import cart from '../../../assets/shopping-cart-2 1.svg'
import heart from '../../../assets/heart.svg'

import styles from './Scooter.module.scss'

const ScooterCart = ({ scootersFilter }: any) => {
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = React.useState(true)
  const [skeletonCount, setSkeletonCount] = React.useState(4)

  useEffect(() => {
    axios
      .get('https://68ee7b85df2025af7803da1f.mockapi.io/kugoos')
      .then((res) => {
        dispatch(setScooters(res.data))
        setSkeletonCount(res.data.length)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error)
      })
  }, [dispatch])

  interface Scooter {
    id: number
    image: string
    title: string
    mAh: string
    speed: string
    power: string
    limit: string
    checkpoint: string
    price: number
    ready: string;
  }

  if (isLoading) {
    return (
      <div className="container">
        <div className={styles.rootLoading}>
          {[...Array(skeletonCount)].map((_, index) => (
            <CardLoading key={index} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className={styles.root}>
        {scootersFilter.map((scooter: Scooter) => (
          <div className={styles.card} key={scooter.id}>
            <div className={styles.specifications}>
              <p
                className={
                  scooter.checkpoint === 'ХИТ'
                    ? styles.specific
                    : styles.specificTwo
                }
              >
                {scooter.checkpoint}
              </p>
              <img src={weight} alt="" />
            </div>

            <img className={styles.image} src={scooter.image} alt="" />
            <h3 className={styles.title}>{scooter.title}</h3>

            <div className={styles.atributes}>
              <div style={{ display: 'flex', columnGap: '20px', alignItems: 'center' }}>
                <div>
                  <span className={styles.span}>
                    <img src={motor} alt="" />
                    <p className={styles.p}>{scooter.mAh}</p>
                  </span>
                  <span style={{ paddingTop: '10px' }} className={styles.span}>
                    <img src={speedometer} alt="" />
                    <p className={styles.p}>{scooter.speed}</p>
                  </span>
                </div>

                <div>
                  <span className={styles.span}>
                    <img className={styles.rightSide} src={speed} alt="" />
                    <p className={styles.p}>{scooter.power}</p>
                  </span>
                  <span style={{ paddingTop: '10px' }} className={styles.span}>
                    <img className={styles.rightSideLast} src={timer} alt="" />
                    <p className={styles.p}>{scooter.limit}</p>
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.buy}>
              <p className={styles.price}>{scooter.price} ₽</p>
              <div className={styles.icons}>
                <img className={styles.icon} src={cart} alt="" />
                <img className={styles.icon} src={heart} alt="" />
              </div>
            </div>

            <button
              className={scooter.ready === 'true' ? styles.btn : styles.notReady}>
              {scooter.ready === 'true' ? "Купить в один клик": 'Оформить предзаказ'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScooterCart
