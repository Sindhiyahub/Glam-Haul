import React from "react";

const MainShop = ({ mainTitle, title, image, onListHandler }) => {
  return (
    // <Card>
      <button onClick={onListHandler}>
        <h2>{mainTitle}</h2>
        <img src={image} alt={title} />
      </button>
    // </Card>
  );
};

export default MainShop;
