
import React, { useState } from 'react';
import { auth } from '../../firebase';

import { actionTypes } from "../../store/AuthContext/reducer";
import { useStateValue } from "../../store/AuthContext/authContext";
import { Link } from 'react-router-dom';
import "./signup.css";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [{}, dispatch] = useStateValue();
  const [showPassword, setShowPassword] = useState(false); // State variable for password visibility

  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Passwords don't match");
        return;
      }

      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!isValidEmail) {
        setError('Invalid email format');
        return;
      }

      if (password.length < 8) {
        setError('Password must be at least 8 characters long');
        return; // Add return to exit function if password length is invalid
      } else if (!/[A-Z]/.test(password)) {
        setError('Password should contain at least one uppercase letter');
        return; // Add return to exit function if uppercase letter is missing
      } else if (!/[0-9]/.test(password)) {
        setError('Password should contain at least one number');
        return; // Add return to exit function if number is missing
      } else if (!/[^A-Za-z0-9]/.test(password)) {
        setError('Password should contain at least one special character');
        return; // Add return to exit function if special character is missing
      }

      await auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
          // Signed in
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          });
          // Reset form fields after successful signup
          setUsername('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setError(null); // Clear any previous errors
          alert("Account Created Successfully !");
        })
        .catch((error) => {
          // Handle errors
          console.error('Email Sign-up error:', error);
          setError(error.message);
        });
        
    } catch (error) {
      setError(error.message);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility state
  };

  return (
    <div className='sign'>
      <h2>Sign Up</h2>
      <div>
        <input
          type="text"
          value={username}
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="email"
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span onClick={handleTogglePasswordVisibility}>
          {showPassword ? "👁️" : "👁️‍🗨️"} 
        </span>
      </div>
      <div>
        <input
          type="password"
          value={confirmPassword}
          placeholder='Confirm Password'
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button onClick={handleSignup}>Sign Up</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
   
     <p>Already Have an Account ? <Link to="/login">Login</Link></p> 
   </div>
  );
};

export default Signup;

