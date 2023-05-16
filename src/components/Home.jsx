import React from "react";
import { useLocation } from "react-router-dom";
export default function Home() {
    const location = useLocation()
    console.log(location)
    return (
        <section className="about--page">
            <h1>This is the Home page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tenetur reprehenderit ipsam, accusamus aperiam nisi officiis consequatur pariatur laborum ut ipsum recusandae, cum eveniet culpa sunt atque quis fugiat aliquam!</p>
        </section>
    )
}