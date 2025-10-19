import React, { useEffect, useState } from 'react'
import ScooterCart from '../../ui/ScooterCard'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setScooterPage, setActiveCategory } from '../../../redux/slices/scooterPageSlice'
import styles from './Scooters.module.scss'
import ButtonView from '../../ui/ButtonView'
import CategoryLoading from '../../ui/CategoryLoading' // компонент скелетона категорий

interface Category {
  id: number
  for: string
}

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
  recomendation: string
}

interface ScooterPageState {
  item: Category[]
  active: string
}

interface ScooterState {
  items: Scooter[]
}

interface MainState {
  scooterPage: ScooterPageState
  scooters: ScooterState
}

const Scooters = () => {
  const scooters = useSelector((state: MainState) => state.scooters.items)
  const { item: categories, active } = useSelector((state: MainState) => state.scooterPage)
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true)
  const [skeletonCount, setSkeletonCount] = useState(5)

  useEffect(() => {
    const fetchScooterPage = async () => {
      try {
        const response = await axios.get('https://68ee7b85df2025af7803da1f.mockapi.io/properties')
        dispatch(setScooterPage(response.data))
        setSkeletonCount(response.data.length)
        setIsLoading(false)
      } catch (error) {
        console.error('404', error)
      }
    }
    fetchScooterPage()
  }, [dispatch])

  const filterCategory =
    active === 'Все'
      ? scooters
      : scooters.filter((item: Scooter) => item.recomendation === active)

  return (
    <div>
      <div className="container">
        <div className={styles.scooterTop}>
          <h2 className={styles.title}>Электросамокаты</h2>
          <div className={styles.buttons}>
            {isLoading
              ? [...Array(skeletonCount)].map((_, index) => (
                  <CategoryLoading key={index} />
                ))
              : categories.map((cat: Category) => (
                  <ButtonView
                    active={active === cat.for}
                    onClick={() => dispatch(setActiveCategory(cat.for))}
                    title={cat.for}
                    key={cat.id}
                  />
                ))}
          </div>
        </div>

        <ScooterCart scootersFilter={filterCategory} />
      </div>
    </div>
  )
}

export default Scooters
