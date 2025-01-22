// import React from "react";
// import ProfileFnComponent from "./Profile.js"
// import Profile from "./ProfileClass.js";
// class About extends React.Component{
//     constructor(props){
//         super(props);
//         console.log("Parent constructor")
//     }

//     componentDidMount(){
//         console.log("Parent component did mount")
//     }    

//     render(){
//     console.log("Parent render")
//     return(
//     <div>
//     <h1> It's About page</h1>
//     <h1>This is Namaste React Live Course - Chapter 7 🚀</h1>
//     {/* <Profile name={"First Child"} xyz={"abc"}/>
//     <ProfileFnComponent /> */}
//     </div>
//     )        
//     }
// }

// export default About;

import React from "react";
import burgerImage from "../../public/burger-image.png";
import "../styles/About.css";

const About = () => {

  return (
    <div className="about-container m-24 container-max min-h-screen">

      <div className="about">
        <div className="about-left">
          <h1> <span>
          🍔BiteBuddies:</span><br/> Redefining the Way You Dine
          </h1>
          <h4>
          "Delivering Taste, Crafted with Care"
          </h4>
        </div>
        <div className="about-right">
          <img src={burgerImage} alt="Food Image" />
        </div>
      </div>
    </div>
  );
};

export default About;

