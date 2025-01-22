import { CDN_URL } from "../utils/constants";

const RestaurantCard =({name,cloudinaryImageId,cuisines,avgRating,sla,areaName,user}) =>{
  
    return (
     <div className="w-[300px] h-[380px] p-2 m-2 rounded-lg shadow-lg hover:scale-95 transition ease-in-out duration-300 relative z-10">
      
        <img className="w-full h-3/5 object-cover rounded-lg" loading="lazy" src={CDN_URL+ cloudinaryImageId}/>   
        <div className="card-details p-2 leading-normal">
           <h2 className="font-bold text-xl truncate mt-2">{name}</h2>     
            <h3 className="font-medium">⭐{avgRating} stars</h3>
             <h3 className="font-medium">🕗{sla.deliveryTime} minutes</h3>
             {/* <h4 className="">{user}</h4> commenting 6 */}
           <p className="truncate">{cuisines.join(", ")}</p>
           <p>{areaName}</p>
       </div>
     </div>
    );
  };

  export default RestaurantCard;