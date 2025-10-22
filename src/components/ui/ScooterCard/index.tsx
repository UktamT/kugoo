import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setScooters } from '../../../redux/slices/scootersSlice'
import { setCart } from '../../../redux/slices/cartSlice'

import CardLoading from '../../ui/CardLoading'

import weight from '../../../assets/weight.svg'
import motor from '../../../assets/motor.svg'
import speed from '../../../assets/speed.svg'
import speedometer from '../../../assets/speedometer.svg'
import timer from '../../../assets/timer.svg'
import cart from '../../../assets/shopping-cart-2 1.svg'
import heart from '../../../assets/heart.svg'
import check from '../../../assets/check.png'

import styles from './Scooter.module.scss'

const ScooterCart = ({ scootersFilter }: any) => {
  const dispatch = useDispatch()
  const limit = useSelector((state: any) => state.scooters.limit)
  const cartItems = useSelector((state: any) => state.cart.items)

  const [isLoading, setIsLoading] = React.useState(true)
  const [skeletonCount, setSkeletonCount] = React.useState(4)
  const [page, setPage] = React.useState(1)
  

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`http://localhost:3002/kugoos`)
      .then((res) => {
        dispatch(setScooters(res.data))
        setSkeletonCount(res.data.length)
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error)
      })
      .finally(() => setIsLoading(false))
  }, [dispatch, limit])

  const handleAddToCart = async (scooter: Scooter) => {
    try {
      const isInCart = cartItems.some((item: any) => item.id === scooter.id)

      if (isInCart) {
        console.log('Товар уже в корзине')
        return
      }

      await axios.post('http://localhost:3002/cart', {
        id: scooter.id,
        title: scooter.title,
        price: scooter.price,
        image: scooter.image,
        mAh: scooter.mAh,
        recomendation: scooter.recomendation,
        checkpoint: scooter.checkpoint,
        power: scooter.power,
        speed: scooter.speed,
        limit: scooter.limit,
        ready: scooter.ready,
        count: 1
      })

      dispatch(setCart({
        id: scooter.id,
        title: scooter.title,
        price: scooter.price,
        image: scooter.image,
        mAh: scooter.mAh,
        recomendation: scooter.recomendation,
        checkpoint: scooter.checkpoint,
        power: scooter.power,
        speed: scooter.speed,
        limit: scooter.limit,
        ready: scooter.ready,
        count: 1
      }))
    } catch (error) {
      console.error('Ошибка:', error)
    }
}



  interface Scooter {
    id: number | string
    image: string
    title: string
    mAh: string
    speed: string
    power: string
    limit: string
    checkpoint: string
    price: number | string
    ready: string;
    recomendation: string
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
        {scootersFilter.map((scooter: Scooter) => {
          const isInCart = cartItems.some((item: any) => item.id === scooter.id)
          return (
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
                <img onClick={() => handleAddToCart(scooter)} className={styles.icon} src={isInCart ? check : cart} alt="" />
                <img className={styles.icon} src={heart} alt="" />
              </div>
            </div>
            <button
              className={scooter.ready === 'true' ? styles.btn : styles.notReady}>
              {scooter.ready === 'true' ? 'Купить в 1 клик' : 'Оформить предзаказ'}
            </button>
            
          </div>
          )
          
})}
      </div>
    </div>
  )
}

export default ScooterCart
