import { useState } from "react";
import CardItem from "../card/CardItem";
import styles from "./content.module.scss"

import { useMyData } from "../../services";

function Screen() {
    const categories = ['Все ароматы', 'Мужские', 'Женские', 'Унисекс']
    const [searchValue, setSerachValue] = useState('')
    const [activeIndex, setActiveIndex] = useState(0)

    const { items, itemsActions } = useMyData()
    
    const changeSeaarch = (event) =>{
        setSerachValue(event.target.value)
    }
    console.log('content render')
    return (
        <div className={styles.content} >
            <div className={styles.underHeader}>
                <div className={styles.categories}>
                    <ul>
                        {categories.map((el, index) => (
                            <li key = {el} className={index == activeIndex ? styles.active : ''} onClick={() => setActiveIndex(index)}>
                                {el}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.searchBlock}>
                    <img src="/lense.svg" alt="" />
                    <input onChange={changeSeaarch} value={searchValue} placeholder='Поиск...' type="text" /> {/* Dопилить крестик */}
                </div>
            </div>

            <div className={styles.fragrCards}>
                {items
                    .filter(el => (el.title.toLowerCase().includes(searchValue.toLowerCase()) || el.brand.toLowerCase().includes(searchValue.toLowerCase()))
                     && (activeIndex == 0 ? el.gender : el.gender == activeIndex))
                    .map(el => (
                        <CardItem key={el.title}
                            onLikeClick={() => itemsActions.setItemToFav(el)}
                            onRemoveFav={() => itemsActions.removeFav(el)}
                            isFav={() => itemsActions.isItemFav(el)}
                            {...el}
                        />))}
            </div>
        </div >
    )
}

export default Screen