import styles from "./header.module.scss"
import Drawer from "../drawer/Drawer"
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import { useState } from 'react'

const Header = () => {
    const [cartOpened, setCartOpen] = useState(false)
    const totalPrice = useSelector((state) => state.cart.totalPrice)

    return (
        <header>

            {cartOpened && <Drawer onClickCloseCart={() => setCartOpen(false)} totalPrice = {totalPrice} />}

            <Link to="/">
                <h1>Sigma Fragrance</h1>
            </Link>
            
            <div className={styles.headerRight}>
                <img onClick={() => setCartOpen(true)} src="./cart.svg" alt="cart" />
                <h3 onClick={() => setCartOpen(true)}> {totalPrice} руб</h3> 

                <Link to="/favorites">
                    <img  src="./heart.svg" alt="liked" />
                </Link>
                
                <img src="./profile.svg" alt="profile" />
            </div>
        </header>
    )
}

export default Header