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
            <img className="res-logo"
            src="https://media-cdn.tripadvisor.com/media/photo-m/1280/17/98/02/ac/momos-this-is-1-plate.jpg"
            alt="momo"/>
            <h3>Great Tasty Boso Rahit Momo</h3>
            <h4>Italian, Continental</h4>
            <h4>4.5 *</h4>
            <h4>24 Minutes</h4>

        </div>
    )
}


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search Bar Here</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
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