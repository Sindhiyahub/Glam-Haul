import React from "react";
import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

import img1 from "../../assets/d.gif";
import img2 from "../../assets/d2.gif";
import img3 from "../../assets/b.webp";
import img4 from "../../assets/comfy casuals.gif";


const Carousel = () => {
  const style = {
    textAlign: "center",
    fontSize: "30px",
    height: "650px",
    width: "100%",
    // borderRadius: "4 0 0",
    marginTop: "100px",

   
  };

  return (
    <div>
      <div>
        <Slide autoplay={true}>
          <img src={img1} alt="img1" style={style} />
          <img src={img2} alt="img2" style={style} />
          <img src={img3} alt="img3" style={style} />
          <img src={img4} alt="img3" style={style} />
        </Slide>
      </div>
    </div>
  );
};

export default Carousel;
