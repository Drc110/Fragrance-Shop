import CardInCartItem from "../cardInCart/CardInCartItem"
import styles from "./drawer.module.scss"
import {useState} from "react"
import { useMyData } from "../../services"


const Drawer = ({onClickCloseCart}) => {
    const { cartItems, itemsActions } = useMyData()
    const [currPrice, changeCurr] = useState(itemsActions.countPrice())
    console.log("draw rerendered")

    return (
        <div className={styles.cartEclipse}>
            <div className={styles.cartMenu}>
                <div className={styles.cartHeader}>
                    <h2>Коризна</h2>
                    <img onClick={onClickCloseCart} src="/close.svg" alt="" />
                </div>

                <div className={styles.cardInCart}>
                    {cartItems.map(el => (
                        <CardInCartItem key={el.title}
                            onRemove = {() => itemsActions.removeCart(el.title)}
                            onChangeAmount = {(newAmount) => {el.amount = newAmount; changeCurr(itemsActions.countPrice())}} //mama mia!
                            {...el}
                        />
                    ))}
                </div>

                <ul>
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>{currPrice} руб</b>
                    </li>
                    <li>
                        <span>Ндс 20%</span>
                        <div></div>
                        <b>{Math.floor(currPrice * 0.2)} руб</b>
                    </li>
                </ul>

                <button>Оформить заказ</button>
            </div>
        </div>
    )
}

export default Drawer
