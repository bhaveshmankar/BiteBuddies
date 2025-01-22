// import {React} from "react";
// import './Shimmer.css'
// const Shimmer=() =>{
//     return( 
//         <>
//         {/* <div className="shimmer-header"></div> */}
//         <div className="shimmer-search-container">
//            <div className="shimmer-search-bar"></div>
//            <div className="shimmer-search-button"></div>            
//         </div>

//         <div className="shimmer-body">
//         { Array(10).fill("").map((e,index) => (
//           <div key={index} className="shimmer-card" ></div>
//         ))}
//         </div>
//         </>
//     );
// };

// Initially i had only one componenent for shimmmer but in chapter 7-finding path , i make two components of shimmer card, one for restrau card and one for restrao menu
//css for restrau card shimmer is imported in body compoennts where i am imporating to show restrau card shimmer
//similarly for restrau menu shimmer is imported in restrau menu componennt where i am importing to show restrau menu shimmer

// export const RestaurantShimmer = () => {
//   return (
//     <>
//     {/* <div className="shimmer-header"></div> */}
//     <div className="shimmer-search-container">
//        <div className="shimmer-search-bar"></div>
//        <div className="shimmer-search-button"></div>            
//     </div>

//     <div className="shimmer-body">
//     { Array(10).fill("").map((e,index) => (
//       <div key={index} className="shimmer-card" ></div>
//     ))}
//     </div>
//     </>
//   );
// };
// export default Shimmer;

export const RestaurantMenuShimmer = () => {
  return (
    <div className="shimmer-menu">
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
    </div>
  );
};

const RestaurantShimmer = () => {
    const ShimmerCard = () => {
    return (
      <div className='animate-pulse space-y-2'>
        <div className=' bg-gray-200 rounded-md aspect-video min-h-[180px] object-cover block card-img relative'></div>
  
        <h2 className='text-lg font-semibold mt-2 h-4 rounded-md bg-gray-200'></h2>
        <div className='flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-200'></div>
      </div>
    );
  };
  return (
    <div className="w-[90%] flex flex-col animate-pulse justify-center items-center transition-all mt-8">
      <div className="w-[50%] h-[50px] bg-gray-200 rounded-lg mb-[30px]">
      </div>
      {/* flex justify-between items-center mb-[30px] */}
      <div className="flex flex-wrap justify-center gap-x-[1.5%] gap-y-[25px]">
      {Array(8).fill("").map((e, index) => (
        <ShimmerCard key={index} />
      ))}
      </div>
    </div>
  );
};

export default RestaurantShimmer;