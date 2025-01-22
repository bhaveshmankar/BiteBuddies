import RestaurantCard from "./RestaurantCard";
import restrautList from "../utils/mockData";
import { useState,useEffect } from "react";
// import {RestaurantShimmer} from "./Shimmer.js";
 import RestaurantShimmer from "./Shimmer.js";

import {Link} from "react-router-dom";
import "./RestaurantCardShimmer.css";
import { filterData } from "../utils/helper.js";
import useRestaurantData from "../utils/useRestaurantData.js"
import useOnline from "../utils/useOnline.js";

const Body =({user}) =>{
   
    const [searchText,setSearchText]=useState("");

    //getting data from custom Hook to get data of allRestaurants, filteredRestaurants, setFilteredRestaurants
    const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurantData();

    //commenting -5
    // const isOnline = useOnline();
    // if(!isOnline){
    //   return <h1>🔴 Offline, Please check your Internet Connection !!</h1>
    // }

    // console.log("render");
    // not render component (early return)
  if(!allRestaurants) return null;

    // if(filteredRestaurants.length ===0) 
    //   return <h1>No Restaurant found...</h1>;
    
     return (allRestaurants?.length === 0) ? <RestaurantShimmer/> : (
        <>
      <div className="search-container py-4 flex justify-center my-5">
      <input type="text" className="search-Input border w-1/4 border-orange-400 focus:bg-green-50 rounded-md p-2 m-2" placeholder="Find your next bite on BiteBuddies..." value={searchText} 
      onChange={(e) => {
        setSearchText(e.target.value);
      }}
        />

    
      <button className="search-button px-4 py-2 m-2 bg-orange-400 text-white rounded-lg" onClick={()  =>{
       const data = filterData(searchText,allRestaurants);
        setFilteredRestaurants(data);
       } }>🔍 Search</button>
      </div>

      <div className = "restaurant-list flex justify-center flex-wrap">
      {filteredRestaurants.length === 0 ? (
        <h1>No Restaurant found...</h1>
      ):(        
        filteredRestaurants.map((restaurant)=>{
         
         return (
        //  <Link to ={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} className="restaurant-link">
         <RestaurantCard{...restaurant.info} key={restaurant.info.id} user={user.name}  />
        //  </Link>
        );
      })
      )}
      
      </div>
      </>  
  );
};

export default Body;  