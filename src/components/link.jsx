import React from "react"
import "./link.css"

const Link = () =>{

return(

<div className="link-container ">

<div className="link-div1 animate-left1">
<div className="heading-h2">
    <h2>Lets Build your Project</h2>
    </div>
    <p>We create modern, user-friendly, and high-performing websites to grow your business</p>
    <a href="http=" ><button className="link-button">Get Started</button></a>
    </div>

<div className="link-div2 animate-left2">
<div className="heading-h2">
<h2>Our Portfolio</h2>
</div>
<p>We have expert developers who build fast, responsive, and SEO-friendly websites to help your business succeed</p>
<a href="http:" ><button className="link-button">View Our Work</button></a>

</div>



<div className="link-div3 animate-left3">
<div className="heading-h2">
<h2>Why Choose Us?</h2>
</div>
<p>We Grow your revenue with a website that builds trust, attracts customers, and keeps your business open 24/7</p>
<a href=""><button className="link-button">Let’s Talk</button></a>

</div>


</div>

)


}

export default Link;