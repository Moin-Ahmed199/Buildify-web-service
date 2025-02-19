import React from "react"
import "./logo.css";
import Logoimg from "../assets/images/Logo.webp";
import Badge from "../assets/images/badge.webp";

const Logo = () =>{

    
return(

<div className="image-conainer ">

<div className="img-container animate-rotate ">
    <img src={Logoimg} alt="Logo" />
</div>

<div className="name-container animate-fade">
    <h2>Buildify | web service</h2>
    
    <div className="badge-container">
    <img src={Badge} alt="" />
    </div>
</div>

</div>

)


}

export default Logo;