import {IMG_URL} from "../utils/constants"
import {useState} from "react"
import Logo from "../assets/img/food_villa.png";
import {Link,useNavigate} from "react-router-dom";
import useOnline from "../utils/useOnline.js";
import LogoComp from "./Logo.js"

const Title=() =>{
    return(
      <a href="/">
      <img className="w-28 mx-2 my-1 " src ={Logo} alt ="Food-Villa"/>
      </a>
      );
    };
    
    
    const Header = () =>{
      const navigate = useNavigate();
      const [isLoggedIn,setIsLoggedIn] = useState(false);
      // const isOnline = useOnline();   commenting 5
      return (
        <div className ="flex justify-between m-2 px-40  shadow-lg">
          {/* <Title/> */}
         <LogoComp />
          <div className="nav-bar">
            <ul className="flex py-8">

              <li className="px-2"><Link to="/">🏠Home</Link></li>
              <li className="px-2"><Link to ="/about">🏨About </Link></li>
              <li className="px-2"><Link to="/contact">📞Contact</Link></li>
              {/* <li className="px-2"><Link to ="/instamart">Instamart</Link></li> */}
              <li className="px-2">🛒Cart</li>

            </ul>
          </div>

          {/* <h1>{isOnline ? '✅' : '🔴'}</h1>  {commenting -5} */}
          { isLoggedIn ? (
              <button className=" px-4 py-2 h-10 my-5 bg-orange-400 text-white rounded-lg" onClick={()=> setIsLoggedIn(false)}>Logout</button>
              ) : (
                <button className="px-4 py-2 h-10 my-5 bg-orange-400 text-white rounded-lg" onClick={()=> navigate("/login")}>Login</button>
            )

            }

        </div>
      );
    };

    export default Header;