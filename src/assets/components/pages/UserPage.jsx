import styles from "./UserPage.module.scss"
import { Link } from 'react-router-dom'

function UserPage() {

    return (
        <div className={styles.content}>
            <div className={styles.underHeader}>
                <h2>Мой аккаунт</h2>
            </div>
            <div className={styles.placeHolder}>
                <img height={100} className={styles.purH} src="/userPageTemp.jpg" alt="" />
                <h2>Страница в разработке...</h2>
                <p>Мы обязательно допилим аккаунты! (нет)</p>
                <Link to="/">
                    <button>Перейти к каталогу</button>
                </Link>
            </div>
        </div >
    )
}

export default UserPage