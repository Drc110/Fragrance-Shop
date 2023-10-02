import React, { useState } from 'react'
import styles from './card.module.scss'

const CardItem  = (props) => {
    const[isAddedToCart, setIsAdded] = useState(false)
    //const[isAddedToCart, setIsAdded] = useState(false)

    const onClickAdd = () =>{
        props.onPlusClick()                   
        setIsAdded(!isAddedToCart)
    }
    
    return(
    <div className={styles.card}>

        <div className={styles.imgWrap}>
            <div onClick = {props.onFavClick} className={styles.likeButton}>
                <img src="/unliked-heart.svg" alt="" />
            </div>
            <img src={props.imageUrl} alt="" />
        </div>

        <div className={styles.textWrap}>
            <h3>{props.brand}</h3>
            <h3>{props.title}</h3>
        </div>

        <div className={styles.bottomWrap}>
            <div className={styles.cardBotLeft}>
                <p>Парфюмерная вода</p>
                <h3>От {props.price} руб</h3>
            </div>
        <img className={styles.cardBotRight} onClick={onClickAdd} src={isAddedToCart ? "/addToCartGreen.svg" : "/addToCartGray.svg"} alt="" />
        </div>

    </div>
    )
}

export default CardItem
