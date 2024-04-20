
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import MainShop from "./MainShop";
// import "./MainShops.css";
// import { useDispatch } from "react-redux";
// // import { uiActions } from "../../store/uiSlice";
// // import { Slide } from "react-slideshow-image";

// import "react-slideshow-image/dist/styles.css";
// import img from "../../assets/1.webp";
// import img13 from "../../assets/ban1.png";
// import img14 from "../../assets/ban3.avif";

// import img9 from "../../assets/w.png";
// import img10 from "../../assets/aurelia.png";
// import img11 from "../../assets/soch.png";
// import img12 from "../../assets/biba.jpg";

// import img5 from "../../assets/ray.png";
// import img6 from "../../assets/arvind.png";
// import img7 from "../../assets/lp.jpg";
// import img8 from "../../assets/otto.jpg";

// import vid from "../../assets/vi5.mp4";
// import vid1 from "../../assets/vi1.mp4";
// import vid2 from "../../assets/vi2.mp4";
// import vid3 from "../../assets/vi3.mp4";


// import img2 from "../../assets/kv.png";
// import img3 from "../../assets/pothys.png";
// import img1 from "../../assets/cs.jpeg";
// import img4 from "../../assets/max.png";

// import { Slide } from "@mui/material";

// const MainShops = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const productListHandler = async (productCategory) => {

//         navigate('/products', { state: { category: productCategory } });
//     };
//     return (
//         <>
//         <div className="mainShops">
//             <div className="mainShops__container">

//                 <div className="category">
//                     <div className="bor">
//                         <div className="circle-container">
//                         <img src={img} alt="" className="circle-image" />
  
//                     </div>
//                     <div className="bor1">
//                         <div className="circle-container">
//                             <img src={img14} alt="" className="circle-image" />
//                         </div>
//                     </div>
//                     <div className="bor2">
//                         <div className="circle-container">
                            
//                             <img src={img13} alt="" className="circle-image" />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="head">
//                     <div className="new">
//                     <h2 onClick={() => productListHandler("Women")}>Women</h2>
//                     </div>
//                     <div className="new1">
//                     <h2 onClick={() => productListHandler("Mens")}>Men</h2>
//                     </div>
//                     <div className="new2">
//                     <h2 onClick={() => productListHandler("Kids")}>Family</h2>
//                     </div>
//                 </div>


//                 <div className="content">
//                     <h2>For the Bold, Stylish & Confident you</h2><br></br>
//                     <p>Our collection features a range of stylish and versatile outfits perfect for any casual occasion. From breezy kurtas to comfy palazzos, each piece is crafted with care and attention to detail. We use high-quality fabrics that are breathable and easy to care for, ensuring that you look and feel your best all day long.
//                     </p></div>

//                 <div className="reel">
//                     <video src={vid} alt="video" controls muted autoPlay loop />
//                     <video src={vid1} alt="video" controls muted autoPlay loop />
//                     <video src={vid2} alt="video" controls muted autoPlay loop />
//                     <video src={vid3} alt="video" controls muted autoPlay loop />
//                 </div>

//                 <div className="logo3">
//                     <MainShop
//                         image={img9} alt="img1" className="pic" onListHandler={() => productListHandler("womens_category")}
//                     />
//                     <MainShop
//                         image={img11} alt="img1" className="pic" onListHandler={() => productListHandler("soch_category")}
//                     />
//                     <MainShop
//                         image={img12} alt="img1" className="pic" onListHandler={() => productListHandler("b_category")}
//                     />
//                     <MainShop
//                         image={img10} alt="img1" className="pic" onListHandler={() => productListHandler("a_category")}
//                     />

//                 </div>


//                 <div className="logo2">
//                     <a href="https://www.raymond.in/"> <img src={img5} alt="img1" className="pic" />
//                     </a>
//                     <a href="https://www.arvindfashions.com/"> <img src={img6} alt="img1" className="pic" />
//                     </a>
//                     <a href="https://louisphilippe.abfrl.in/"> <img src={img7} alt="img1" className="pic" />
//                     </a>
//                     <a href="https://www.ottostore.com/"> <img src={img8} alt="img1" className="pic" />
//                     </a>
//                 </div>

//                 <div className="logo1">
//                     <a href="https://www.thechennaisilks.com/"> <img src={img1} alt="img1" className="pic" />
//                     </a>
//                     <a href="https://kvtex.in/"> <img src={img2} alt="img1" className="pic" />
//                     </a>
//                     <a href="https://www.pothys.com/"> <img src={img3} alt="img1" className="pic" />
//                     </a>
//                     <a href="https://www.maxfashion.in/in/en/"> <img src={img4} alt="img1" className="pic" />
//                     </a>
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// };

// export default MainShops;


import React from "react";
import { useNavigate } from "react-router-dom";
import MainShop from "./MainShop";
import "./MainShops.css";
import { useDispatch } from "react-redux";

import vid from "../../assets/vi5.mp4";
import vid1 from "../../assets/vi1.mp4";
import vid2 from "../../assets/vi2.mp4";
import vid3 from "../../assets/vi3.mp4";

import img from "../../assets/1.webp";
import img13 from "../../assets/ban1.png";
import img14 from "../../assets/ban3.avif";

import img9 from "../../assets/w.png";
import img10 from "../../assets/aurelia.png";
import img11 from "../../assets/soch.png";
import img12 from "../../assets/biba.jpg";

import img5 from "../../assets/ray.png";
import img6 from "../../assets/arvind.png";
import img7 from "../../assets/lp.jpg";
import img8 from "../../assets/otto.jpg";

import img2 from "../../assets/kv.png";
import img3 from "../../assets/pothys.png";
import img1 from "../../assets/cs.jpeg";
import img4 from "../../assets/max.png";

const MainShops = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const productListHandler = async (productCategory) => {
        navigate('/products', { state: { category: productCategory } });
    };

    return (
        <div className="mainShops">
            <div className="mainShops__container">

                <div className="category">
                    <div className="bor">
                        <div className="circle-container">
                            <img src={img} alt="" className="circle-image" />
                        </div>
                    </div>
                    <div className="bor1">
                        <div className="circle-container">
                            <img src={img13} alt="" className="circle-image" />
                        </div>
                    </div>
                    <div className="bor2">
                        <div className="circle-container">
                            <img src={img14} alt="" className="circle-image" />
                        </div>
                    </div>
                </div>

                <div className="head">
                    <div className="new">
                        <h2 onClick={() => productListHandler("Women")}>Women</h2>
                    </div>
                    <div className="new1">
                        <h2 onClick={() => productListHandler("Men")}>Men</h2>
                    </div>
                    <div className="new2">
                        <h2 onClick={() => productListHandler("Kids")}>Family</h2>
                    </div>
                </div>

                <div className="content">
                    <h2>For the Bold, Stylish & Confident you</h2><br></br>
                    <p>Our collection features a range of stylish and versatile outfits perfect for any casual occasion. From breezy kurtas to comfy palazzos, each piece is crafted with care and attention to detail. We use high-quality fabrics that are breathable and easy to care for, ensuring that you look and feel your best all day long.
                    </p>
                </div>

                <div className="reel">
                    <video src={vid} alt="video" controls muted autoPlay loop />
                    <video src={vid1} alt="video" controls muted autoPlay loop />
                    <video src={vid2} alt="video" controls muted autoPlay loop />
                    <video src={vid3} alt="video" controls muted autoPlay loop />
                </div>

                <div className="exp">
                    <button>Explore More</button>
                </div>

                <div className="logo3">
                <a href="https://wforwoman.com/"> <img src={img9} alt="img1" className="pic" />
                    </a>
                    <a href="https://www.soch.com/in/"> <img src={img11} alt="img1" className="pic" />
                    </a>
                    <a href="https://www.biba.in/"> <img src={img12} alt="img1" className="pic" />
                    </a>
                    <a href="https://shopforaurelia.com/"> <img src={img10} alt="img1" className="pic" />
                    </a>
                </div>

                <div className="logo2">
                    <a href="https://www.raymond.in/"> <img src={img5} alt="img1" className="pic" />
                    </a>
                    <a href="https://www.arvindfashions.com/"> <img src={img6} alt="img1" className="pic" />
                    </a>
                    <a href="https://louisphilippe.abfrl.in/"> <img src={img7} alt="img1" className="pic" />
                    </a>
                    <a href="https://www.ottostore.com/"> <img src={img8} alt="img1" className="pic" />
                    </a>
                </div>

                <div className="logo1">
                    <a href="https://www.thechennaisilks.com/"> <img src={img1} alt="img1" className="pic" />
                    </a>
                    <a href="https://kvtex.in/"> <img src={img2} alt="img1" className="pic" />
                    </a>
                    <a href="https://www.pothys.com/"> <img src={img3} alt="img1" className="pic" />
                    </a>
                    <a href="https://www.maxfashion.in/in/en/"> <img src={img4} alt="img1" className="pic" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MainShops;
