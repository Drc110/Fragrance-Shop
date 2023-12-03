import styles from './card.module.scss'
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart } from '../../services/slices/cartSlice'
import { addToFav, removeFromFav } from '../../services/slices/favSlice'

const CardItem = ({
    imageUrl,
    brand,
    title,
    price,
    volume
}) => {
    const [isActive, setActive] = useState(false)
    const [amount, setAmount] = useState(1) //mod in final version ==> isItemInCart ? isItemInCart.amount : 1
    const [selectedValue, setSelectedValue] = useState('0')
    const isItemInCart = useSelector((state) => state.cart.cartItems.some((obj) => obj.title == title)) 
    const isItemFav = useSelector((state) => state.fav.favItems.some((obj) => obj.title == title))
    const dispatch = useDispatch()

    //useEffect(() => {isItemInCart && setAmount(isItemInCart.amount)}) //sync with cart in one way (cart ==> content)
    
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
            setAmount(Math.floor(Number(evt.target.value)))
        }
    }

    const onClickAdd = () => {
        const item = {
            imageUrl,
            brand,
            title,
            price: price[selectedValue],
            volume: volume[selectedValue],
            amount: amount
        }
        dispatch(addToCart(item))
    }

    const onClickLike = () => {
        const item = {
            imageUrl,
            brand,
            title,
            price,
            volume
        }
        dispatch(addToFav(item))
    }

    return (
        <div>
            <div className={styles.card}>

                <div className={styles.imgWrap}>
                    <img className={styles.likeButton} onClick={isItemFav ? () => dispatch(removeFromFav(title)) : onClickLike} src={isItemFav ? "/hearthRed.svg" : "/hearthGray.svg"} alt="" />
                    <img src={imageUrl} loading="lazy" alt="" onClick={() => setActive(true)}/>
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
                    <img className={styles.cardBotRight} onClick={isItemInCart ? () => dispatch(removeFromCart(title)) : () => setActive(true)} src={isItemInCart ? "/addToCartGreen.svg" : "/addToCartGray.svg"} alt="" />
                </div>

            </div>
            {isActive && (
                <div className={styles.backIfActive} onClick={closePopUp} data-txt="close">
                    <div className={styles.bigWrapper}>
                        <div className={styles.mainWrap}>
                            <div className={styles.image}>
                                <img className={styles.imgBig} src={imageUrl} alt=""/>
                            </div>
                            <div className={styles.options}>
                                <div className={styles.optionsTop}>
                                    <h2>{brand} {title}</h2>
                                    <img className={styles.closeButton} onClick={closePopUp} data-txt="close" src="/close.svg"/>
                                </div>
                                
                                {volume.map((el, index) => (
                                    <div className={styles.flex} key = {index}>
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
                                <img className={styles.bigCardAdd} onClick={isItemInCart ? () => dispatch(removeFromCart(title)) : onClickAdd} src={isItemInCart ? "/addToCartGreen.svg" : "/addToCartGray.svg"} alt="" />
                            </div>
                        </div>
                        <div className={styles.descrption}>

                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default CardItem
