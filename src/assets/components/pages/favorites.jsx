import CardItem from "../card/CardItem"
import styles from "./favorites.module.scss"

import { Link } from 'react-router-dom'
import { useState } from "react"
import { useSelector } from "react-redux"

function Favorites() {
    const [searchValue, setSerachValue] = useState('')

    const favItems = useSelector((state) => state.fav.favItems)

    const changeSeaarch = (event) =>{
        setSerachValue(event.target.value)
    }

    return (
        <div className={styles.content} >
            <div className={styles.underHeader}>
                <h2>Мои закладки</h2>
                <div className={styles.searchBlock}>
                    <img src="/lense.svg" alt="" />
                    <input onChange={changeSeaarch} value={searchValue} placeholder='Поиск...' type="text" /> {/* Dопилить крестик */}
                </div>
            </div>

            {favItems.length ? (
                <div className={styles.fragrCards}>
                    {favItems
                        .filter(el => el.title.toLowerCase().includes(searchValue.toLowerCase()) || el.brand.toLowerCase().includes(searchValue.toLowerCase()))
                        .map(el => (
                            <CardItem key={el.title}
                                {...el}
                            />))}
                </div>) : (
                <div className={styles.placeHolder}>
                    <img className={styles.purH} src="/purpleHearth.svg" alt="" />
                    <h2>В избранном пока пусто</h2>
                    <h4>Сохраняйте товары, которые понравились, чтобы долго не искать</h4>
                    <Link to="/">
                        <button>перейти на главную</button>
                    </Link>
                </div>
            )}
        </div >
    )
}

export default Favorites