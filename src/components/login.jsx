import React from "react";
import "./styles/login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="container">
        <h1>Welcome back!</h1>
        <p>Enter your Credentials to access your account</p>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              placeholder="Enter your email"
              type="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              placeholder="Enter your password"
              type="password"
              required
            />
            <a href="#">Forgot password?</a>
          </div>
          <div className="checkbox-group">
            <input id="remember" type="checkbox" />
            <label htmlFor="remember">Remember for 30 days</label>
          </div>
          <button className="btn" type="submit">
            Login
          </button>
        </form>
        <div className="social-login">
          <button>
            <img
              alt="Google logo"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
            Sign in with Google
          </button>
          <button>
            <img
              alt="Apple logo"
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            />
            Sign in with Apple
          </button>
        </div>
        <div className="signup-link">
          Don't have an account? <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
