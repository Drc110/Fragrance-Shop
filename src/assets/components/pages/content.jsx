import styles from "./content.module.scss"
import CardItem from "../card/CardItem"
import { useSelector } from "react-redux"
import { useState} from "react"

function Content() {
    const categories = ['Все ароматы', 'Мужские', 'Женские', 'Унисекс']
    const [searchValue, setSerachValue] = useState('')
    const [activeIndex, setActiveIndex] = useState(0)
    const items = useSelector((state) => state.items.items)
    
    const changeSeaarch = (event) =>{
        setSerachValue(event.target.value)
    }

    return (
        <div className={styles.content} >
            <div className={styles.underHeader}>
                <div className={styles.categories}>
                    <ul>
                        {categories.map((el, index) => (
                            <li key = {el} className={index == activeIndex ? styles.active : ''} onClick={() => setActiveIndex(index)}>
                                {el}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.searchBlock}>
                    <img src="/lense.svg" alt="" />
                    <input onChange={changeSeaarch} value={searchValue} placeholder='Поиск...' type="text" /> {/* Dопилить крестик */}
                </div>
            </div>

            <div className={styles.fragrCards}>
                {items
                    .filter(el => (el.title.toLowerCase().includes(searchValue.toLowerCase()) || el.brand.toLowerCase().includes(searchValue.toLowerCase()))
                     && (activeIndex == 0 ? el.gender : el.gender == activeIndex))
                    .map(el => (<CardItem key={el.title}
                            {...el}
                    />))
                }
            </div>
        </div>
    )
}

export default Content