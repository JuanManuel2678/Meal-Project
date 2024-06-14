import React from 'react'
import { Route, Routes } from 'react-router-dom'
import   MealDetail   from './components/MealDetail/MealDetail'
import  MealListto  from './components/MealList/MealListto'

export default function Enrutador() {
    return (
        <Routes>
            <Route path='/' element={<h1>hola mundo</h1>}/>
            <Route path='/meals/:category' element={<MealListto/>} />
            <Route path='/meal-details' element={<MealDetail/>} />
        </Routes>
    )
}