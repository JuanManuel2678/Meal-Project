import { Card } from "../MealList/Card"
import './MealList.css'

export const MealList = ({ data }) => {
    return (
        <>
            <div className="list-container">
                <ul className="meal-list">
                    {data && data.map(meal => (
                        <Card
                            key={meal.idMeal}
                            name={meal.strMeal}
                            img={meal.strMealThumb}
                        />
                    ))}
                </ul>
            </div>
        </>
    )
}