import React from 'react'
import { Link,useParams } from 'react-router-dom'
import { menuArray } from '../../public/data'
export default function FoodItem(props) {
    const params = useParams()
   

    const chosenItem = menuArray.find(item => item.id === params.productsId)
    console.log(chosenItem)

    return (
        <div className="food-container">
            <h2 className="name">{chosenItem.name} {chosenItem.emoji}</h2>
            <p className="ingredients">{chosenItem.ingredients.join(' ')}</p>
            <p className="price">$ {chosenItem.price}</p>
        </div>
    )
}