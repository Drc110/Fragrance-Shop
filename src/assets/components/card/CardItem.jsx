import { useState } from 'react'
import styles from './card.module.scss'
import { useMyData } from '../../services'

function CardItem ({
    imageUrl,
    brand,
    title,
    price,
    volume,
    onLikeClick,
    onRemoveFav,
    isFav
}) {
    const [isActive, setActive] = useState(false)
    const [amount, setAmount] = useState(1)
    const [selectedValue, setSelectedValue] = useState('0')

    const closePopUp = (evt) =>{
        if(evt.target.dataset.txt == "close"){
            setActive(false)
        }
    }

    const handleRadioChange = (evt) => {
        setSelectedValue(evt.target.value);
    }

    const changeAmountEvt = (evt) => {
        if(evt.target.value >= 100){
            setAmount(99)
        }else if(evt.target.value < 1){
            setAmount(1)
        }else{
            setAmount(Number(evt.target.value))
        }
    }

    const { itemsActions } = useMyData()//50 % init , 50% passing wtf?

    const isAdded = () => itemsActions.isItemAdded(title) 
    const onPlusClick = () => itemsActions.setItemToCart(title, Number(selectedValue), Number(amount))
    const onRemoveCart = () => itemsActions.removeCart(title)

    console.log('cart render')
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
                                <img className={styles.closeButton} onClick={closePopUp} data-txt="close" src="/close.svg"/>
                                <h2>{brand} {title}</h2>

                                {volume.map((el, index) => (
                                    <div className={styles.flex}>
                                        <div className={styles.volume}>
                                            <input type="radio" name={title} checked={selectedValue == index} value={index} onChange={handleRadioChange}/>
                                            <p>Флакон объемом {el} мл.</p>
                                        </div>
                                        <p className={styles.priceRight}>{price[index]} руб/шт.</p>
                                    </div>
                                ))}

                                <div className={styles.counter}>
                                    <img onClick={amount > 1 ? () => setAmount(amount - 1) : null} src="/MinusCart.svg" alt="" />
                                    <input type="number" min="1" max="99" value={amount} onChange={(evt) => setAmount(evt.target.value)} onBlur={changeAmountEvt}/>
                                    <img onClick={amount < 99 ? () => setAmount(amount + 1) : null} src="/PlusCart.svg" alt="" />
                                </div>
                                <img className={styles.bigCardAdd} onClick={isAdded() ? () => onRemoveCart() : () => onPlusClick()} src={isAdded() ? "/addToCartGreen.svg" : "/addToCartGray.svg"} alt="" />
                            </div>
                        </div>
                        <div className={styles.descrption}>

                        </div>
                    </div>
                </div>
            ) : (
                null
            )}
            
        </div>
    )
}

export default CardItem
