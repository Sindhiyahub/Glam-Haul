import React, { useState, useEffect } from "react";
import "./Product.css";
import "./WishList.css";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchCategoryData } from "../../../src/database";
import { db, auth, provider } from '../../../src/firebase';
import { collection, getDocs } from "firebase/firestore/lite";
import { doc, updateDoc, getDoc, setDoc } from 'firebase/firestore/lite';
import { actionTypes } from "../../store/AuthContext/reducer";
import { useStateValue } from "../../store/AuthContext/authContext";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { CiHeart } from "react-icons/ci";
import WishList from "../../components/Header/Wishlist/WishList";
import ProductShare from './Productshare';


const Product = ({ user }) => {
  const [category, setCategory] = useState([]);
  const [selectedShop, setSelectedShop] = useState("");
  const [selectedColour, setSelectedColour] = useState("");
  const [sortByPrice, setSortByPrice] = useState("asc");
  const location = useLocation();
  const categoryName = location.state?.category;
  const navigate = useNavigate();
  console.log("category name from Mainshops ", categoryName)
  console.log("user", user)

  var displayName;
  var uid;

  auth.onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      displayName = user.displayName;
      uid = user.uid;
      console.log('User Name: ' + displayName);
      console.log('User ID: ' + uid);
    }
  });




  useEffect(() => {
    const fetchData = async () => {
      const newData = await fetchCategoryData("Products");
      setCategory(newData);
    };

    fetchData();
    console.log(category)
  }, [categoryName]);

  const CategorizedProducts = category.filter(
    (item) => item.category === categoryName
  );

  console.log("category_name ", categoryName)

  const addToWishlist = async (product) => {
    console.log("product", product)
    // check if product already added in wishlis
    console.log(product.id)
    const docRef = doc(collection(db, "wishlist " + uid), product.id);
    const docSnap = await getDoc(docRef);
    await setDoc(docRef, {
      title: product.title,
      description: product.description,
      colour: product.colour,
      fabric: product.fabric,
      price: product.price,
      url: product.url,
    });
    console.log("Added to wishlist");
  };

 
// Filter the items where category is "Women"
const filteredItems = category.filter(item => item.category === categoryName);

// Get unique shop names from filtered items
const shops = Array.from(new Set(filteredItems.map(item => item.shop)));

  const filterByShop = (shop) => {
    setSelectedShop(shop);
  };

  const colours = Array.from(new Set(filteredItems.map((item) => item.colour)));

  const filterByColour = (colour) => {
    setSelectedColour(colour);
  };


  const sortByPriceHandler = () => {
    setSortByPrice(sortByPrice === "asc" ? "desc" : "asc");
  };

  // Sort products based on price
  const sortedProducts = CategorizedProducts.sort((a, b) => {
    if (sortByPrice === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });


  return (
    <>

     {/* Sort by price button */}
     <div className="sortfil">
      <div className="sortlh1">
      <h3>Sort</h3>
      By Price:<button className="sortlh" onClick={sortByPriceHandler}>
          {sortByPrice === "asc" ? "(Low to High)" : "(High to Low)"}
        </button>
        </div>
        <div className="filterbyshop">
        <h3>Filter</h3>
          By Shop:<ul>
            {shops.map((shop) => (
              <li
                key={shop}
                onClick={() => filterByShop(shop)}
                className={selectedShop === shop ? "selected" : ""}
              >
                {shop}
              </li>
            ))}
          </ul>
          By Colour:
          <ul>
            {colours.map((colour) => (
              <li
                key={colour}
                onClick={() => filterByColour(colour)}
                className={selectedColour === colour ? "selected" : ""}
              >
                {colour}
              </li>
            ))}
          </ul>
          </div>
        </div> 
      <div className="product">
        {CategorizedProducts.filter(
          (item) =>
            (selectedShop === "" || item.shop === selectedShop) &&
            (selectedColour === '' || item.colour === selectedColour)
        ).map((item) => (
          <div className="product__link" key={item.id}>
            <div className="product__container">
              <img className="product__image" src={item.url} alt="" />
              <div className="product__info">
                <h3>{item.title}</h3>
                <h3 className="product__description">
                  {item.description}
                </h3>
                <h3 className="colour">Colour: {item.colour}</h3>
                <h3 className="fabric">Fabric: {item.fabric}</h3>
                <h3 className="product__price">Price: {item.price}</h3>
                <h3 className="shop">Shop: {item.shop}</h3>
                <button
                  onClick={() =>
                    user
                      ? addToWishlist(item)
                      : navigate("/login", { state: { from: location } })
                  }
                >
                  <FavoriteBorderOutlinedIcon className="heart-icon" />
                </button>
                <ProductShare className="sha" productName={item.title} productUrl={item.url} productPrice={item.price} />

              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
