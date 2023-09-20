import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
    const params = useParams();
    console.log({ params });
    const { id = ""} = params

    const [restaurantDetails, setRestaurantsDetails] = useState({});
    async  function getRestaurantInfo () {
        const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await res.json();
        setRestaurantsDetails(json?.data?.cards);
        console.log( json?.data?.cards);
    }
    
    useEffect(()=>{
        getRestaurantInfo();
    }, [])

    return !restaurantDetails ? ( <ShimmerUI /> ) : (
      <div className="menu">
        <div>
            <h1>Restaurant id: {id}........</h1>
            <h1>{restaurantDetails[0]?.card?.card?.info?.name}</h1>
            <img src={IMG_CDN_URL + restaurantDetails[0]?.card?.card?.info?.cloudinaryImageId}/>
            <h3>{restaurantDetails[0]?.card?.card?.info?.areaName}</h3>
            <h3>{restaurantDetails[0]?.card?.card?.info?.city}</h3>
            <h3>{restaurantDetails[0]?.card?.card?.info?.avgRating}</h3>
            <h3>{restaurantDetails[0]?.card?.card?.info?.costForTwoMessage}</h3>
        </div>
        <div>
            <h1>Menu</h1>
            <ul>
                {
                    restaurantDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((item)=> {
                        return(
                            <li key={item?.card?.info?.id}>
                                {item?.card?.info?.name}
                            </li>
                        )
                })
                }
            </ul>
        </div>
      </div>
  );
};

export default RestaurantMenu;
