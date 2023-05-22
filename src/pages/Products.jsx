import React  from "react";
import { Link,Outlet } from 'react-router-dom'

import { menuArray } from "../../public/data";
import FoodItem from "./FoodItem";

export default function () {

    const itemsJsx = menuArray.map(item => {
        return <h1 key={item.id}><Link to={`/about/products/${item.id}`}>{item.name}</Link></h1>
    })

    return (
        <div className="container">
            <h1>This is Products page</h1>
            <div className="products-container">
               {itemsJsx}
            </div>
            <Outlet />
        </div>
    )
}
{/* <FoodItem 
                      key={item.id} 
                      name={item.name}
                      ingeredients={item.ingredients}
                      price={item.price}
                      emoji={item.emoji}
                /> */}