import styles from './cardInCart.module.scss'
import { useState } from 'react'

const CardInCartItem  = ({
    imageUrl,
    brand,
    title,
    price,
    amount,
    volume,
    onRemove,
    onChangeAmount
}) => {
    const [amountCart, setAmount] = useState(Number(amount)) //enter 0 in input and press close :| also can be float :O

    const changeAmountEvt = (evt) => {
        if(evt.target.value >= 100){
            setAmount(99)
        }else if(evt.target.value < 1){
            setAmount(1)
        }else{
            setAmount(Number(evt.target.value))
        }
    }
    console.log('cart in cart render')
    return(
    <div className={styles.card}>

        <div className={styles.imgWrap}>
            <img src={imageUrl} alt="" />
        </div>

        <div className={styles.textWrap}>
            <p>Парфюмерная вода</p>
            <h3>{brand} <br/> {title}</h3>
            <h4>{volume} мл.</h4>
            <h2>{price * amountCart} руб</h2>
        </div>
        <div className={styles.rightWrap}>
            <img onClick = {() => {onRemove(); onChangeAmount(0)}} className={styles.removeBtn} src="/close.svg" alt="" />
            <div className={styles.counter}>
                <img onClick={amountCart > 1 ? () => {setAmount(amountCart - 1); onChangeAmount(amountCart - 1)} : null} src="/MinusCart.svg" alt="" />
                <input type="number" min="1" max="99" value={amountCart} onChange={(evt) => {setAmount(Number(evt.target.value)); onChangeAmount(evt.target.value)}} onBlur={changeAmountEvt}/>
                <img onClick={amountCart < 99 ? () => {setAmount(amountCart + 1); onChangeAmount(amountCart + 1)} : null} src="/PlusCart.svg" alt="" />
            </div>
        </div>
        
    </div>
    )
}

export default CardInCartItem
