import styles from "./content.module.scss"
import CardItem from "../card/CardItem"
import axios from "axios"
import { useSelector } from "react-redux"
import { useEffect, useState} from "react"
import { setItems, updateItems } from "../../services/slices/itemsSlice"
import { useDispatch } from "react-redux"
import { useInView } from 'react-intersection-observer'

function Content() {
    const categories = ['Все ароматы', 'Мужские', 'Женские', 'Унисекс'] 
    const [searchValue, setSerachValue] = useState('')
    const [activeCategoryIndex, setActiveCategoryIndex] = useState('')
    const [currPage, setCurrPage] = useState(1)
    const items = useSelector((state) => state.items.items)
    const dispatch = useDispatch()

    async function fetchPageOfItems(pageNum, gender = '') {
        return await axios.get(`https://6509cc03f6553137159c07d1.mockapi.io/items?page=${pageNum}&limit=10&gender=${gender}`).then((response) => response.data)
    }

    const {ref, inView} = useInView({
        threshold: 0.6,
    })

    const changeSeaarch = (event) => {
        setSerachValue(event.target.value)
    }

    const changeCategory = (index) => {
        setCurrPage(1)
        index == 0 ? index = '' : null
        setActiveCategoryIndex(index)
        fetchPageOfItems(1, index).then(data => dispatch(setItems(data)))
    }

    useEffect(() => {
        fetchPageOfItems(1).then(data => dispatch(setItems(data)))
    }, [])

    useEffect(() => {
        if(inView){
            setCurrPage(currPage + 1)
            fetchPageOfItems(currPage + 1, activeCategoryIndex).then(data => dispatch(updateItems(data))) //debounce
        }
    }, [inView])

    return (
        <div className={styles.content} >
            <div className={styles.underHeader}>
                <div className={styles.categories}>
                    <ul>
                        {categories.map((el, index) => (
                            <li key = {el} className={index == activeCategoryIndex ? styles.active : ''} onClick={() => changeCategory(index)}>
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
                    .filter(el => (el.title.toLowerCase().includes(searchValue.toLowerCase()) || el.brand.toLowerCase().includes(searchValue.toLowerCase()))) //sorting only loaded
                    .map(el => (<CardItem key={el.title}
                        {...el}
                    />))
                }
            </div>
            <div ref={ref} className={styles.observer}></div>
        </div>
    )
}

export default Content