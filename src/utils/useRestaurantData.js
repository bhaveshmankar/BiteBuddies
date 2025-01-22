// import { useState, useEffect } from "react";

// const useRestaurantData = () => {
//     const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//     const [allRestaurants, setAllRestaurants] = useState([]);
    
//     useEffect(()=>{
//       getRestaurants();
//       // console.log("useEffect");
//     },[]);

//     //akshay saini function
//     // async function getRestaurants(){
//     //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");
//     //   const json=await data.json();
//     //   console.log(json);
//     //   setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     //   setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     // }

//     // refer - https://chatgpt.com/share/e0d04cf2-898c-43b5-b515-7d756927c217


    
//     // async function getRestaurants() {
//     //   const response = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
//     //   const data = await response.json();
      
//     //   // Log the API response
//     //   //console.log(data);
    
    
//     //   // Assuming the data structure is the same
//     //   setAllRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     //   setFilteredRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);//bcoz when page loads filtered restro should have all restro bcoz we are showing filtered restro
//     // }
  

//     async function getRestaurants() {
    
//       const latitude = 12.9351929;
//       const longitude = 77.62448069999999;
    
//       try {
//         const response = await fetch(`https://foodfire-server-id4j.onrender.com/api/restaurants?lat=`+latitude+`&lng=`+longitude+`&page_type=DESKTOP_WEB_LISTING`);
//         const data = await response.json();
//         setAllRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         setFilteredRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//       } catch (error) {
//         console.error("Error fetching restaurants:", error);
//       }
    
//     }

//     return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
// }

// export default useRestaurantData;

import { useState, useEffect } from "react";
import restrautList from "./mockData";

const useRestaurantData = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    
    useEffect(()=>{
      getRestaurants();
      // console.log("useEffect");
    },[]);

    //akshay saini function
    // async function getRestaurants(){
    //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");
    //   const json=await data.json();
    //   console.log(json);
    //   setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //   setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }

    // refer - https://chatgpt.com/share/e0d04cf2-898c-43b5-b515-7d756927c217


    
    // async function getRestaurants() {
    //   const response = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    //   const data = await response.json();
      
    //   // Log the API response
    //   //console.log(data);
    
    
    //   // Assuming the data structure is the same
    //   setAllRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //   setFilteredRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);//bcoz when page loads filtered restro should have all restro bcoz we are showing filtered restro
    // }
  

    async function getRestaurants() {
    
      const latitude = 12.9351929;
      const longitude = 77.62448069999999;
    
      try {
        const response = await fetch(`https://foodfire-server-id4j.onrender.com/api/restaurants?lat=`+latitude+`&lng=`+longitude+`&page_type=DESKTOP_WEB_LISTING`);
        const data = await response.json();
        setAllRestaurants(restrautList);
        setFilteredRestaurants(restrautList);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    
    }

    return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
}

export default useRestaurantData;