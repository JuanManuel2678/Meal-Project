import { useEffect, useState } from 'react'
import CategoriteList from './CategoriteList'
import CategoriteItem from './CategoriteItem'
import './styles.css'

export default function RightSide() {
    const [meal, setMeal] = useState([])
    const [data, setData] = useState([])
    const [search, setSearch] = useState({name: ''})


    async function getData() {
        const rs = await fetch('http://www.themealdb.com/api/json/v1/1/categories.php')
        const rsJson = await rs.json()
        console.log(rsJson)

        const filterData = rsJson.categories.map(item => ({
            id: item?.idCategory,
            name: item?.strCategory,
            img: item?.strCategoryThumb
        }))

        setData(filterData)
        setMeal(filterData)
    }
    useEffect(()=> {
        getData()
    }, [])
    
    function search_meal() {
     const filtered = meal.filter(item => item.name.toLowerCase().includes(search.name.toLowerCase()))
     setData(filtered)
    }

    return(
       <main>
         <h1>Meals</h1>
        <div className="search_container">
          <input type="text" placeholder="Search category" value={search.name} onChange={(e) => setSearch({...search, name: e.target.value})} onClick={search_meal}/>
           {/* <button onClick={search_meal}>Search</button> */}
        </div>
        
        <CategoriteList>
            {data && data.map(item => (
                <CategoriteItem
                key={item.id}
                item={item}/>
            ))}
        </CategoriteList>
       </main>
    )
}