import React  from "react";
import { Link,Outlet } from "react-router-dom";
import { servicesArray } from "../../public/services";



export default function () {
   const servicesJsx = servicesArray.map(item => {
    return  <h1 key={item.id}><Link to={`/about/services/${item.name}`}>{item.name}</Link></h1>
   })

  

    return (
        <div className="container">
            <h1>This is services page</h1>
            {servicesJsx}
            <Outlet/>
        </div>
    )
}