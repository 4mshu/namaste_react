import React from "react";
import ReactDOM from "react-dom/client";


/*
Header
    - Logo
    - Nav Items
Body
    - Search
    - Restaurant Container
        - Restaurant Cards
            - img
            - name of restaurant
            - star rating
            - cuisines
            - ETA
Footer
    - Copyright warning
    - Links, address, contact info
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <h3>Great Tasty Boso Rahit Momo</h3>


        </div>
    )
}


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search Bar Here</div>
            <div className="res-container">
            <RestaurantCard />
            </div>
        </div>
    )
}



const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
            
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)