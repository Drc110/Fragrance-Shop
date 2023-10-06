import styles from './cardInCart.module.scss'

const CardInCartItem  = ({
    imageUrl,
    brand,
    title,
    price,
    onRemove
}) => {

    return(
    <div className={styles.card}>

        <div className={styles.imgWrap}>
            <img src={imageUrl} alt="" />
        </div>

        <div className={styles.textWrap}>
            <p>Парфюмерная вода</p>
            <h3>{brand} <br/> {title}</h3>
            <h4>30 мл</h4>
            <h2>{price} руб</h2>
        </div>
        <div className={styles.rightWrap}>
            <img onClick = {() => onRemove()} className={styles.removeBtn} src="/close.svg" alt="" />
            <div className={styles.counter}>
                <img src="/MinusCart.svg" alt="" />
                <input type="number" min="1" max="99" placeholder='1'/>
                <img src="/PlusCart.svg" alt="" />
            </div>
        </div>
        
    </div>
    )
}

export default CardInCartItem
