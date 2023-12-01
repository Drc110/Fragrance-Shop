import styles from "./content.module.scss"
import CardItem from "../card/CardItem"
import axios from "axios"
import { useSelector } from "react-redux"
import { useEffect, useState} from "react"
import { setItems } from "../../services/slices/itemsSlice"
import { useDispatch } from "react-redux"
import { useInView } from 'react-intersection-observer'

function Content() {
    const categories = ['Все ароматы', 'Мужские', 'Женские', 'Унисекс']
    const [searchValue, setSerachValue] = useState('')
    const [activeIndex, setActiveIndex] = useState('')
    const [currPage, setCurrPage] = useState(1)
    const items = useSelector((state) => state.items.items)
    const dispatch = useDispatch()

    async function fetchPageOfItems(pageNum, gender = '') {
        async function fetchData() {
          return await axios.get(`https://6509cc03f6553137159c07d1.mockapi.io/items?page=${pageNum}&limit=10&gender=${gender}`).then((response) => response.data);
        }
        dispatch(setItems(await fetchData()))
    }

    const {ref, inView} = useInView({
        threshold: 0.9,
    })

    const changeSeaarch = (event) => {
        setSerachValue(event.target.value)
    }

    useEffect(() => {
        fetchPageOfItems(1)
    }, [])

    useEffect(() => {
        if(inView){
            setCurrPage(currPage + 1)
            fetchPageOfItems(currPage + 1) //debounce
        }
    }, [inView])

    return (
        <div className={styles.content} >
            <div className={styles.underHeader}>
                <div className={styles.categories}>
                    <ul>
                        {categories.map((el, index) => (
                            <li key = {el} className={index == activeIndex ? styles.active : ''} onClick={() => {setActiveIndex(index), setCurrPage(1)}}>
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
            {activeIndex == 0 && <div ref={ref} className={styles.observer}></div>}
        </div>
    )
}

export default Content