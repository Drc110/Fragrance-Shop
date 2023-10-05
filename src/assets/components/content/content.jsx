import React from "react";
import CardItem from "../card/CardItem";
import styles from "./content.module.scss"

import { useMyData } from "../../services";

function Screen() {
    const [searchValue, setSerachValue] = React.useState('')
    const { items, itemsActions } = useMyData()

    const changeSeaarch = (event) =>{
        setSerachValue(event.target.value)
    }

    console.log("rerendered screen")

    return (
        <div className={styles.content} >
            <div className={styles.underHeader}>
                <h2>Все ароматы</h2>
                <div className={styles.searchBlock}>
                    <img src="/lense.svg" alt="" />
                    <input onChange={changeSeaarch} value={searchValue} placeholder='Поиск...' type="text" /> {/* Dопилить крестик */}
                </div>
            </div>

            <div className={styles.fragrCards}>
                {items
                    .filter(el => el.title.toLowerCase().includes(searchValue.toLowerCase()) || el.brand.toLowerCase().includes(searchValue.toLowerCase()))
                    .map(el => (
                        <CardItem key={el.title}
                            isAdded={() => itemsActions.isItemAdded(el)}
                            onPlusClick={() => itemsActions.setItemToCart(el)}
                            onRemoveCart={() => itemsActions.removeCart(el)}
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