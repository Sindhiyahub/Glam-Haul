import React, { useState } from 'react';
import img from "../../assets/contact.webp";
import "./cont.css";

const Contact = () => {



return(
<div className='contact'>
 <h2>Contact Us</h2>
<h4> Questions? Comments? Get in touch </h4>
<h2 className='mail'><b>Email:</b><span>customer@gmail.com</span></h2>
<h2 className='what'><b>Whatsapp Us: </b><span>8879654123 </span> (from 10 AM to 6 PM, Mon to Sun).</h2>
<h5> We are closed on bank holidays.</h5>
</div>

);

};
export default Contact;