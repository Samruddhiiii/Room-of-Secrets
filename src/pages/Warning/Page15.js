// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import fire from "../../assets/Images/firevideo.mp4";

// const Page15 = () => {
//   const [inputValue, setInputValue] = useState("");
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue === "exorcise") {
//       navigate("/page117", {
//         state: {
//           auth: true,
//         },
//       });
//     } else {
//           toast.error("Incorrect Password. Please Try Again", {
//       position: toast.POSITION.BOTTOM_RIGHT
//     });
//     }
//   };

//   const location = useLocation();
//   useEffect(() => {
//     if (!location.state || !location.state.auth) {
//       navigate("/");
//     }
//   }, []);

//   const handleVideoEnd = () => {
//     window.location.href = "/";
//   };

//   const [fadeIn, setFadeIn] = useState(false);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setFadeIn(true);
//     }, 150);
//     return () => clearTimeout(timer);
//   }, []);



//   return (
//     <>
//       <div style={{marginTop:'50px'}}>
//         <video width="100%" autoPlay muted onEnded={handleVideoEnd}>
//   <source src={fire} type="video/mp4" />
//   Sorry, your browser doesn't support videos.
// </video>
//         <form onSubmit={handleSubmit} style={{ position:"absolute", top:"70%", width:"30%" , left:'35%'}}>
//                     <label style={{color:"white"}}>
//                       <input
//                         type="text"
//                         value={inputValue}
//                         onChange={handleInputChange}
//                         placeholder="********"
//                         style={{
//                           borderRadius: "0",
//                           width: "80%",
//                           letterSpacing:"15px",
//                         }}
//                       />
//                     </label>
//                     <button type="submit"> SUPRESS </button>
//                   </form>
//       </div>
//     </>
//   );
// };

// export default Page15;