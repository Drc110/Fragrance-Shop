import styles from './cardInCart.module.scss'

import { useState } from 'react'
import { useDispatch } from "react-redux"
import { removeFromCart, setAmount } from '../../services/slices/cartSlice'

const CardInCartItem = ({
    imageUrl,
    brand,
    title,
    price,
    amount,
    volume
}) => {
    const [newAmount, setNewAmount] = useState(amount)
    const dispatch = useDispatch()

    const changeAmountEvt = (evt) => { //thunkAPI redux !!!onChange regex <=2 symbols
        if(evt.target.value >= 100){
            setNewAmount(99)
        }else if(evt.target.value < 1){
            setNewAmount(1)
        }else{
            setNewAmount(Math.floor(Number(evt.target.value)))
        }
        dispatch(setAmount({title: title, amount: Math.floor(newAmount)}))
    }

    const deleteOne = () => {
        setNewAmount(newAmount - 1)
        dispatch(setAmount({title: title, amount: newAmount - 1}))
    }

    const addOne = () => {
        setNewAmount(newAmount + 1)
        dispatch(setAmount({title: title, amount: newAmount + 1}))
    }

    return(
    <div className={styles.card}>

        <div className={styles.imgWrap}>
            <img src={imageUrl} alt="" />
        </div>

        <div className={styles.textWrap}>
            <p>Парфюмерная вода</p>
            <h3>{brand} <br/> {title}</h3>
            <h4>{volume} мл.</h4>
            <h2>{price * amount} руб</h2>
        </div>
        <div className={styles.rightWrap}>
            <img onClick = {() => dispatch(removeFromCart(title))} className={styles.removeBtn} src="/close.svg" alt="" />
            <div className={styles.counter}>
                <img onClick={newAmount > 1 ? deleteOne : null} src="/MinusCart.svg" alt="" />
                <input type="number" min="1" max="99" value={newAmount} onChange={(evt) => {setNewAmount(evt.target.value)}} onBlur={changeAmountEvt}/>
                <img onClick={newAmount < 99 ? addOne : null} src="/PlusCart.svg" alt="" />
            </div>
        </div>
        
    </div>
    )
}

export default CardInCartItem
