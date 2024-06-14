import { useEffect, useState } from "react"
import { MealList } from "./components/MealList/MealList"
import RightSide from "./components/RightSide/RightSide"
import Enrutador from "./Enrutador";


function App() {
  // const [dataCat, setDataCat] = useState([])

  // const getCategories = async ()=>{
  //   const rs = await(await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork')).json()
  //   setDataCat(rs.meals)
  // }

  // useEffect(()=>{
  //   getCategories()
  // },[])

  return (
    <>
    <RightSide/>

    <main>

      <Enrutador/>
    </main>
      {/* {
        dataCat && <MealList data={dataCat}/>
      } */}
    </>
  );
}

export default App;

