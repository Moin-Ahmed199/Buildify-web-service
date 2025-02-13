import React from "react"
import "./icons.css"

import { FaInstagram , FaEnvelope , FaWhatsapp, FaDesktop} from 'react-icons/fa';
const Icons = () =>{

       const hiremelink = () => {
            window.open("https://wa.link/ju3gzh", "_blank");}


return(

<div className="icon-container">

<ul>



<ul>
    
    <li className="dekstop animate-fade1">
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            <FaDesktop />
        </a>
    </li>


    <li className="envelope animate-fade2">
    <a href="mailto:info.buildifywebservices@gmail.com" rel="noopener noreferrer">
        <FaEnvelope />
    </a>
</li>


    <li className="Instagram animate-fade3">
        <a href="https://www.instagram.com/moin.ahmed199/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
        </a>
    </li>


    <li className="whatsapp animate-fade4" onClick={hiremelink}>
        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" >
            <FaWhatsapp />
        </a>
    </li>
</ul>





</ul>


</div>

)


}

export default Icons;