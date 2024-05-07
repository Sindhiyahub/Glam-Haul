import React from 'react'
import "./Footer.css"
import img from "../../assets/glam.png";
import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa6";


const Footer = () => {

    const scroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="footer">
            <button onClick={scroll}>Back to top</button>
            <div className="footer__container">
                <div className="footer__stuff">
                    <div className="footer__one">
                        <h3><center>FOLLOW US ON</center></h3>
                        <img
                            className="pic"
                            src={img}
                            alt="headerLogo"
                        />
                    </div>




                    <div className='map'>
                        <iframe
                            title="Google Maps Embed"
                            src="https://www.google.com/maps/d/u/0/embed?mid=1tkMjLxRRtPMKoSsutelBlT0Izej8gbM"
                            width="600"
                            height="450"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className='contact'>
                        <u><h2>Contact us</h2></u>
                        <a href="https://www.instagram.com/_glam_haul_/" target="_blank" rel="noopener noreferrer">
                            <BsInstagram className='insta' /> <h2><p>_glam_haul_</p></h2>
                        </a>
                        <h2 className='mail'><MdOutlineMailOutline className='con' /><p>customer@gmail.com</p></h2>
                        <h2 className='what'><ImWhatsapp className='cont' /><p>8879654123 (from 10 AM to 6 PM, Mon to Sun)</p></h2>
                        <h4> We are closed on bank holidays.</h4>
                    </div>
                </div>
            </div>
            <div className='copy'><FaRegCopyright className='co' />   Glam Haul!   All Rights Reserved</div>
        </div>)
}

export default Footer
