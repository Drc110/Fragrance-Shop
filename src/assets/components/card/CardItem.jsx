import React from 'react'
import styles from './card.module.scss'

const CardItem  = ({
    imageUrl,
    brand,
    title,
    price,
    onPlusClick,
    isAdded,
    onRemoveCart,
    onLikeClick,
    onRemoveFav,
    isFav
}) => {
    return(
    <div className={styles.card}>

        <div className={styles.imgWrap}>
            {/* <div className={styles.likeButton}> */}
            <img className={styles.likeButton} onClick={isFav() ? () => onRemoveFav() : () => onLikeClick()} src={isFav() ? "/hearthRed.svg" : "/hearthGray.svg"} alt="" />
            <img src={imageUrl} alt="" />
        </div>

        <div className={styles.textWrap}>
            <h3>{brand}</h3>
            <h3>{title}</h3>
        </div>

        <div className={styles.bottomWrap}>
            <div className={styles.cardBotLeft}>
                <p>Парфюмерная вода</p>
                <h3>От {price} руб</h3>
            </div>
        <img className={styles.cardBotRight} onClick={isAdded() ? () => onRemoveCart() : () => onPlusClick()} src={isAdded() ? "/addToCartGreen.svg" : "/addToCartGray.svg"} alt="" />
        </div>

    </div>
    )
}

export default CardItem
