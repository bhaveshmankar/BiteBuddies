// import { useRouteError } from "react-router-dom";
// 
// const Error=() => {
//     const err=useRouteError();
//     console.log(err);
//     return(
//         <div>
//         <h1>Oops!!...</h1>
//         <h1>Something went wrong...</h1>
//         <h2>{err.status + " : " + err.statusText}</h2>
//         </div>
//     )
// }

// export default Error;

import errorImage from "../../public/error-image.jpg"
import { Link, useRouteError } from "react-router-dom";
import "../styles/Error.css"
const Error = () => {
  const err = useRouteError();

  return (
    <div className="error-page">
      <div className="error-image">
        <img src={errorImage} alt="Error Image" />
      </div>

      <div className="error-details">
        <h1>Oops! Something Went Wrong!!</h1>
        <h3 className="error-data">{err.data}</h3>

        <h3 className="error-back-home">
          <Link className="link-name" to="/">Back Home</Link>
        </h3>
      </div>
    </div>
  );
};

export default Error;