import React from "react";
import Login from "./Login";
import Signin from "./signin";


const  Mainl = () => {
return (
    <>
    <div className="main">
        
          <Signin /> 
   
    </div>
 <div>
 <hr
   style={{
   background: "grey",
   height: "1px",
   border: "none",
   margin:"50px",
   width:"75%",
   marginLeft:"200px",
   alignItems:"center"
   }}
/>
 </div>
      <div className="log">
          <Login />
       </div>
    </>
  );
}
  export default Mainl;