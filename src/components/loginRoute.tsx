import { useState } from "react";
import HomePage from "../pages/HomePage";
import Form from "../pages/Form";

const Login = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin = () => {
      // Your login logic here
  
      // If login is successful
      setIsLoggedIn(true);
    }
  
    return (
      <>
        {isLoggedIn ? (
          // Render the home page
          <HomePage />
        ) : (
          // Render the login form and button
          <Form />
        )}
      </>
    );
  }