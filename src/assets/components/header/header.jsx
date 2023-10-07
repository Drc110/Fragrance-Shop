import { useMyData } from "../../services";
import { Link } from 'react-router-dom'
import styles from "./header.module.scss"

function Header({onClickOpenCart}) {
    const { itemsActions } = useMyData()
    console.log('header render')
    return (
        <header>
            <Link to="/">
                <h1>Sigma Fragrance</h1>
            </Link>

            <div className={styles.headerRight}>
                <img onClick={onClickOpenCart} src="./cart.svg" alt="cart" /> {/* onClick={onClickopenCart} into one ?div? */}
                <h3 onClick={onClickOpenCart}> {itemsActions.countPrice()} руб</h3> 

                <Link to="/favorites">
                    <img  src="./heart.svg" alt="liked" />
                </Link>
                
                <img src="./profile.svg" alt="profile" />
            </div>
        </header>
    )
}

export default Header