import { useEffect, useState } from "react"
import { MealList } from "./components/MealList/MealList"
import { useParams } from 'react-router-dom'


export default function MealListto() {
  const {category} = useParams()
  const [dataCat, setDataCat] = useState([])

  const getCategories = async ()=>{
    const rs = await(await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)).json()
    setDataCat(rs.meals)
  }

  useEffect(()=>{
    getCategories()
  },[category])

    return(
      <>
        {
        dataCat && <MealList data={dataCat}/>
      }
      </> 
    )
}