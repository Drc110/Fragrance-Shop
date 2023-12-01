import CardItem from "../card/CardItem"
import styles from "./favorites.module.scss"
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"

function Favorites() {
    const favItems = useSelector((state) => state.fav.favItems)

    return (
        <div className={styles.content} >
            <div className={styles.underHeader}>
                <h2>Мои закладки</h2>
            </div>

            {favItems.length ? (
                <div className={styles.fragrCards}>
                    {favItems
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