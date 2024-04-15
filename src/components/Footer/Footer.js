import React from 'react'
import "./Footer.css"
import img from "../../assets/glam.png";
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
                        {/* <div className="footer__title">
                            <h2>Get to Know Us</h2>
                        </div>
                        <div className="footer__text">
                            <h4>Careers</h4>
                            <h4>Blog</h4>
                            <h4>About</h4>
                            <h4>Investor Relations</h4>
                            <h4>Devices</h4>
                        </div> */}
                    </div>
                    <div className="footer__two">

                    <iframe
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
      ></iframe>
                        
                        {/* <div className="footer__title">
                            <h2>Make Money with Us</h2>
                        </div>
                        <div className="footer__text">
                            <h4>Sell products</h4>
                            <h4>Sell on Business</h4>
                            <h4>Sell apps on</h4>
                            <h4>Become an Affiliate</h4>
                            <h4>Host an Hub</h4>
                            <h4>› See More Make Money with Us</h4>
                        </div> */}
                    </div>
                    <div className="footer__three">

                          <a href="/contact">  <h2>contact</h2></a>

                        {/* <div className="footer__title">
                            <h2>Payment Products</h2>
                        </div>
                        <div className="footer__text">
                            <h4>Business Card</h4>
                            <h4>Shop with Points</h4>
                            <h4>Reload Your Balance</h4>
                            <h4>Currency Converter</h4>
                        </div> */}
                    </div>
                    <div className="footer__four">
                        {/* <div className="footer__title">
                            <h2>Let Us Help You</h2>
                        </div>
                        <div className="footer__text">
                            <h4>COVID-19</h4>
                            <h4>Your Account</h4>
                            <h4>Your Orders</h4>
                            <h4>Shipping Rates & Policies</h4>
                            <h4>Returns & Replacements</h4>
                            <h4>Manage Your Content and Devices</h4>
                            <h4>Help</h4>
                        </div> */}
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
        </div>)
}

export default Footer
