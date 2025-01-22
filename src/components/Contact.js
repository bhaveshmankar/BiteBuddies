// import React from 'react';

// const Contact = () => {
//   return (
//     <div>
//       <h1>Contact me if you are feeling hungry📞</h1>
//     </div>
//   )
// }

// export default Contact

import { useState } from "react";
import "../styles/Contact.css";
import contactUs from "../../public/contact-us.png";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact-container min-h-screen">
      <div className="contact-left">
        <img src={contactUs} alt="" />
      </div>
      
      <div className="contact-right">
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Type your Message here..." required></textarea>
          <button type="submit">Submit</button>
          {message && (
            <span>Thanks for contacting with BiteBuddies, We will reply ASAP.</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
