import React from "react";

import { auth, provider, db } from "../../firebase";
import { collection, doc, setDoc, getDoc } from "firebase/firestore/lite";

import "./Login.css";

import googleLogo from "../../assets/google.png";

import { actionTypes } from "../../store/AuthContext/reducer";
import { useStateValue } from "../../store/AuthContext/authContext";
import { useNavigate, useLocation } from "react-router";

const Login = () => {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const location = useLocation();

  const loginButtonHandler = () => {
    auth
      .signInWithPopup(provider)
      .then(async (result) => {
        console.log(result.user);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        // check if user already exists in collection
        const docRef = doc(collection(db, "users"), result.user.uid);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          // user does not exist, add new document with generated id
          await setDoc(docRef, {
            name: result.user.displayName,
            email: result.user.email,
          });
          console.log("user added in firestore");
        } else {
          console.log("user already exists in firestore");
        }
        let { from } = location.state || { from: { pathname: "/home" } };
        navigate(from);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <div className="login__container">
        
        <button onClick={loginButtonHandler}>
          Login with Google
          <span>
            <img
              className="login__googleLogo"
              src={googleLogo}
              alt="Google Logo"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Login;
