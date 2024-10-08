import {IMG_CDN_URL} from "../utils/constants"
const RestaurantCard = (props) => {
    const {restaurant} = props
    return (
      <div className="res-card">
        <img src={IMG_CDN_URL + restaurant.data.cloudinaryImageId} />
        <h2>{restaurant.data.name}</h2>
        <h4>{restaurant.data.cuisines.join(", ")}</h4>
        <h4>{restaurant.data.area}</h4>
        <span>
          <h4>
            {restaurant.data.avgRating} *
          </h4>
          <h4>{restaurant.data.lastMileTravelString}</h4>
          <h4>{restaurant.data.costForTwoString}</h4>
        </span>
      </div>
    );
  };

  export default RestaurantCard;