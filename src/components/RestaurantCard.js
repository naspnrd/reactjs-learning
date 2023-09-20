import { IMG_CDN_URL } from "../constants";

const RestaurantCard = (props) => {
    const { restaurant = {} } = props;
    const {name ="", cloudinaryImageId ="", cuisines = [], avgRating = "", id = ""} = restaurant || "";
    return (
        <div className="card" key={id}>
            <img src={
              IMG_CDN_URL + 
              cloudinaryImageId
              } 
            />
            <h2>{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h4>{avgRating + " stars"}</h4>
        </div>
    )
}

export default RestaurantCard;