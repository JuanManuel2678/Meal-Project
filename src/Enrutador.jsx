import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  { MealList } from './components/MealList/MealList'
import MealDetail from './components/MealDetail/MealDetail'

export default function Enrutador() {
    return (
        <Routes>
            <Route path='/' element={<h1>hola mundo</h1>}/>
            <Route path='/meals' element={<MealList/>} />
            <Route path='/meal-details' element={<MealDetail/>} />
        </Routes>
    )
}