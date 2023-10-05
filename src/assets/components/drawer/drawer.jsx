import CardInCartItem from "../cardInCart/CardInCartItem"
import styles from "./drawer.module.scss"

import { useMyData } from "../../services"


const Drawer = ({onClickCloseCart}) => {
    const { cartItems, itemsActions } = useMyData()

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
                            onRemove = {() => itemsActions.removeCart(el)}
                            {...el}
                        />
                    ))}
                </div>

                <ul>
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>{itemsActions.countPrice()} руб</b>
                    </li>
                    <li>
                        <span>Ндс 20%</span>
                        <div></div>
                        <b>{Math.floor(itemsActions.countPrice() * 0.2)} руб</b>
                    </li>
                </ul>

                <button>Оформить заказ</button>
            </div>
        </div>
    )
}

export default Drawer
