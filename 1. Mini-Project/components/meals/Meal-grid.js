import React from 'react'
import classes from "./meals-grid.module.css"
import MealItem from './Meal-item'

const MealsGrid = ({ meals }) => {
    return (
        <ul className={classes.meals}>
            {
                meals.map((meal) => (
                    <li key={meal.id}>
                        <MealItem {...meal} />
                    </li>
                ))
            }
        </ul>
    )
}

export default MealsGrid