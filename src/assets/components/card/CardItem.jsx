import React from 'react'
import styles from './card.module.scss'
import { useMyData } from '../../services'

function CardItem ({
    imageUrl,
    brand,
    title,
    price,
    volume,
    onPlusClick,
    isAdded,
    onRemoveCart,
    onLikeClick,
    onRemoveFav,
    isFav
}) {

    const [isActive, setActive] = React.useState(false)
    const closePopUp = (evt) =>{
        if(evt.target.dataset.txt == "close"){
            setActive(false)
        }
    }

    return (
        <div>
            <div className={styles.card}>

                <div className={styles.imgWrap}>
                    <img className={styles.likeButton} onClick={isFav() ? () => onRemoveFav() : () => onLikeClick()} src={isFav() ? "/hearthRed.svg" : "/hearthGray.svg"} alt="" />
                    <img src={imageUrl} alt="" onClick={() => setActive(true)}/>
                </div>

                <div className={styles.textWrap} onClick={() => setActive(true)}>
                    <h3>{brand}</h3>
                    <h3>{title}</h3>
                </div>

                <div className={styles.bottomWrap}>
                    <div className={styles.cardBotLeft}>
                        <p>Парфюмерная вода</p>
                        <h3>От {price[0]} руб</h3>
                    </div>
                    <img className={styles.cardBotRight} onClick={isAdded() ? () => onRemoveCart() : () => setActive(true)} src={isAdded() ? "/addToCartGreen.svg" : "/addToCartGray.svg"} alt="" />
                </div>

            </div>
            {isActive ? (
                <div className={styles.backIfActive} onClick={closePopUp} data-txt="close">
                    <div className={styles.bigWrapper}>
                        <div className={styles.mainWrap}>
                            <div className={styles.image}>
                                <img className={styles.imgBig} src={imageUrl} alt=""/>
                            </div>
                            <div className={styles.options}>
                                <h2>{brand} {title}</h2>

                                {volume.map((el) => (
                                    <div className={styles.volume}>
                                        <input type="radio" name="1"/>
                                        <p>Флакон объемом {el} мл.</p>
                                    </div>
                                ))}

                                <div className={styles.counter}>
                                    <img src="/MinusCart.svg" alt="" />
                                    <input type="number" min="1" max="99" placeholder='1'/>
                                    <img src="/PlusCart.svg" alt="" />
                                </div>
                                <img className={styles.bigCardAdd} onClick={isAdded() ? () => onRemoveCart() : () => onPlusClick()} src={isAdded() ? "/addToCartGreen.svg" : "/addToCartGray.svg"} alt="" />
                            </div>
                        </div>
                        <div className={styles.descrption}>

                        </div>
                        <button onClick={closePopUp} data-txt="close">123</button>
                    </div>
                </div>
            ) : (
                null
            )}
            
        </div>
    )
}

export default CardItem
