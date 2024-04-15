
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { actionTypes } from "../../store/AuthContext/reducer";
import { useStateValue } from "../../store/AuthContext/authContext";
import { useNavigate, Link } from "react-router-dom";
import "./signin.css";

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [{}, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null); // State variable for error message

  const handleEmailSignIn = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        // Signed in
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        navigate("/products", { replace: true });
        setEmail('');
        setPassword('');
        setError(null); // Clear any previous errors
        alert("Login successful");
      })
      .catch((error) => {
        // Handle errors
        console.error('Email Sign-In error:', error);
        if (error.code === "auth/user-not-found") {
          setError("Invalid user");
        } else if (error.code === "auth/wrong-password") {
          setError("Wrong password");
        } else {
          setError("Sign-in failed");
        }
      });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='signin'>
      <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span onClick={handleTogglePasswordVisibility}>
          {showPassword ? "👁️" : "👁️‍🗨️"} 
        </span>
      <button onClick={handleEmailSignIn}>Sign in with Email</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

export default Signin;
