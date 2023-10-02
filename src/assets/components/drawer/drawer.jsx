import CardInCartItem from "../cardInCart/CardInCartItem"
import { useContext } from "react"
import styles from "./drawer.module.scss"
import { appContext } from "../home/App"



const Drawer = ({ onClickCloseCart, onRemove}) => {
    
    const {itemsInCart} = useContext(appContext)

    return (
        <div className={styles.cartEclipse}>
            <div className={styles.cartMenu}>
                <div className={styles.cartHeader}>
                    <h2>Коризна</h2>
                    <img onClick={onClickCloseCart} src="/close.svg" alt="" />
                </div>

                <div className={styles.cardInCart}>
                    {itemsInCart.map(el => (
                        <CardInCartItem brand={el.brand} title={el.title} price={el.price} imageUrl={el.imageUrl} id = {el.id} onRemove1 = {onRemove}/> //onRemove1???
                    ))}
                </div>

                <ul>
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>9400 руб</b>
                    </li>
                    <li>
                        <span>Ндс 20%</span>
                        <div></div>
                        <b>1400 руб</b>
                    </li>
                </ul>

                <button>Оформить заказ</button>
            </div>
        </div>
    )
}

export default Drawer
