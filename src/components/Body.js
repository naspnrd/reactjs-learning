// no key(not acceptable) <<<<<<<<<< index key (USE ONLY if you don't have anything ) << unique key (best practice)
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";

const filterData = (searchTxt, restaurants) => {
    console.log({searchTxt, restaurants})
    const regex = new RegExp(searchTxt, 'gi');
    // const filteredResult = restaurants?.filter((restaurant) =>restaurant?.info?.name.includes(searchTxt));
    const filteredResult = restaurants?.filter((restaurant) =>restaurant?.info?.name.match(regex));
    return filteredResult;
}
const Body = () => {
    // const searchTxt = "Burger King"; // this will not work
    // searchTxt is a local variable and that's how we create local state variables in reactjs
    
    // Method - 1
    const [searchTxt, setSearchTxt] = useState("");
    
    // Method - 2
    // const searchVal = useState("Burger King");
    // const [searchTxt, setSearchTxt] = searchVal;

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        // API Call
        getRestaurantLists();
    }, []);

    async function getRestaurantLists () {
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93577245&lng=77.66676103753434&is-seo-homepage-enabled=true");
        const json = await res?.json();
        console.log("data--------",json);
        setAllRestaurants(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // console.log("render-----------"); 
    if(!allRestaurants)
        return null;
        
    return (allRestaurants.length === 0) ? <ShimmerUI/> : (
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="search restaurant" 
                    value={searchTxt}
                    // onChange={(event)=>onChangeInput} // event is provided by react
                    onChange={(event)=>setSearchTxt(event.target.value)}
                />
                <button className="search-btn" onClick={ (e) => {
                    const data = filterData(searchTxt, allRestaurants);
                    console.log({data})
                    setFilteredRestaurants(data);
                }}> Search</button>
            </div>
            {
                filteredRestaurants.length === 0 ? <h1>No Restaurant Found</h1> :
                    <div className="restaurant-list">
                        {
                            filteredRestaurants?.map((restaurant) => 
                            // Are key prop should present in parent tab of map
                            <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
                                <RestaurantCard 
                                    restaurant = {restaurant?.info} 
                                    // key={restaurant?.info?.id} 
                                />
                            </Link>
                            )
                        }
                    </div>
            }
        </>
    )
}

export default Body;