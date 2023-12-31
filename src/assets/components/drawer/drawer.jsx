import CardInCartItem from "../cardInCart/CardInCartItem"
import styles from "./drawer.module.scss"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Drawer = ({onClickCloseCart, totalPrice}) => {
    const cartItems = useSelector((state) => state.cart.cartItems)

    return (
        <div className={styles.cartEclipse}>
            <div className={styles.cartMenu}>
                <div className={styles.cartHeader}>
                    <h2>Коризна</h2>
                    <img onClick={onClickCloseCart} src="/close.svg" alt="" />
                </div>

                {cartItems.length ? (
                <div className={styles.content}>
                    <div className={styles.cardInCart}>
                        {cartItems.map(el => (
                            <CardInCartItem key={el.title}
                                {...el}
                            />
                        ))}
                    </div>
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>{totalPrice} руб</b>
                        </li>
                        <li>
                            <span>Ндс 20%</span>
                            <div></div>
                            <b>{Math.floor(totalPrice * 0.2)} руб</b>
                        </li>
                    </ul>
                    <Link to="/user">
                        <button onClick={onClickCloseCart} className={styles.bottomBtn}>Оформить заказ</button>
                    </Link>
                </div>
                
                ) : (
                    <div className={styles.emptyCart}>
                        <h2>Корзина пуста</h2>
                        <p>Похоже вы ничего не добавили, вкрнуться в каталог?</p>
                        <button onClick={onClickCloseCart}>Каталог</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Drawer
