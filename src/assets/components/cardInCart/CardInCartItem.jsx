import styles from './cardInCart.module.scss'

const CardInCartItem  = (props) => {
    return(
    <div className={styles.card}>

        <div className={styles.imgWrap}>
            <img src={props.imageUrl} alt="" />
        </div>

        <div className={styles.textWrap}>
            <p>Парфюмерная вода</p>
            <h3>{props.brand} {props.title}</h3> {/* в 2 строки не правильно */}
            <p>30 мл</p>
            <h3>{props.price} руб</h3>
        </div>

        <img onClick = {() => props.onRemove1(props.id)} className={styles.cancelWrap} src="/close.svg" alt="" />
    </div>
    )
}

export default CardInCartItem
