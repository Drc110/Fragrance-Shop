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
            <h3>{brand} {title}</h3> {/* в 2 строки не правильно */}
            <p>30 мл</p>
            <h3>{price} руб</h3>
        </div>

        <img onClick = {() => onRemove()} className={styles.cancelWrap} src="/close.svg" alt="" />
    </div>
    )
}

export default CardInCartItem
