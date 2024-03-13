import React, { useState } from "react";
import "./LoginSignup.css";
import person from "../Assests/person.png";
import password from "../Assests/password.png";
import email from "../Assests/email.png";
import Message from "../Message/Message";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar/Navbar";
import MainLayout from "../Layout/MainLayout";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <MainLayout>
      <>
        <div className="parent">
          <ToastContainer />
          <div className="container">
            <div className="header">
              <div className="text">{action}</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              {action === "Login" ? (
                <div />
              ) : (
                <div className="input">
                  <img src={person} alt="" />
                  <input type="text" placeholder="Name" />
                </div>
              )}
              <div className="input">
                <img src={email} alt="" />
                <input type="email" placeholder="Email Id" />
              </div>
              <div className="input">
                <img src={password} alt="" />
                <input type="password" placeholder="Password" />
              </div>
            </div>
            {action === "Sign Up" ? (
              <div />
            ) : (
              <div className="forgot-password">
                <span>
                  <input value="test" type="checkbox" /> Remember me
                </span>
                <span>Forgot Password?</span>
              </div>
            )}

            <div className="submit-container">
              <button
                className={action === "Login" ? "submit gray" : "submit"}
                onClick={() => {
                  setAction("Sign Up");
                  if (action === "Sign Up") {
                    toast.warning("Signup failed");
                  }
                }}
              >
                Sign Up
              </button>
              <button
                className={action === "Sign Up" ? "submit gray" : "submit"}
                onClick={() => {
                  setAction("Login");
                  if (action === "Login") {
                    toast.error("Login Failed");
                  }
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </>
    </MainLayout>
  );
};

export default LoginSignup;
