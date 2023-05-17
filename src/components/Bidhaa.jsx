import React from "react";

import { Link,useParams,useNavigate } from "react-router-dom";
import { servicesArray } from "../../public/services";
export default function Bidhaa(props) {

    const navigate = useNavigate()

    const params = useParams()
     console.log(params.serviceId)

     const selectedService = servicesArray.find(item => item.name === params.serviceId)
     console.log(selectedService)

    return (
        <div className="service--container">
            <h1 onClick={() => navigate(`/about/serices`)}
            >service: {selectedService.name}</h1>
            <p>Tools needed: {selectedService.tools}</p>
            <p>price: ${selectedService.price}</p>
        </div>
    )
}