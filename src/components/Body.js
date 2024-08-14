import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search Bar Here</div>
            <div className="res-container">
                {restaurantList.map((restaurant, index)=> <RestaurantCard restaurant={restaurant} key={restaurant.data.id}/>)}
                
            </div>
        </div>
    )
}

export default Body;