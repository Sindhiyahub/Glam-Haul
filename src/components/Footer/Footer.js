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
                        <img
                            className="pic"
                            src={img}
                            alt="headerLogo"
                        />
                    </div>

                    <div className="footer__two">
                        {/* <iframe
                            title="Instagram Embed"
                            src="https://www.instagram.com/p/C5u3u59P16M/embed"
                            frameBorder="0"
                            scrolling="no"
                            allowtransparency="true"
                            allowFullScreen={true}
                            style={{
                                background: '#FFF',
                                border: '0',
                                borderRadius: '3px',
                                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                                margin: '1px',
                                maxWidth: '540px',
                                minWidth: '326px',
                                padding: '0',
                                width: '99.375%',
                                width: '-webkit-calc(100% - 2px)',
                                width: 'calc(100% - 2px)',
                            }}
                        ></iframe> */}
                        <a href="https://www.instagram.com/_glam_haul_/" target="_blank" rel="noopener noreferrer">
                            <BsInstagram className='insta' />
                        </a>
                    </div>

                    <div className="footer__three">
                        <a href="/contact"> <ImWhatsapp className='cont'/></a>
                        <a href="/contact"><MdOutlineMailOutline className='con'/></a>


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
                </div>
            </div>
            <div className='copy'><FaRegCopyright className='co'/>   Glam Haul!   All Rights Reserved</div>
        </div>)
}

export default Footer
