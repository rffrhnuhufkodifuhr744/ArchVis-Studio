import React from "react";
import "./appLogin.css";

const AppLogin = () => {
  return (
    <div className="login-page">
      <div class="center">
        <h1>Login</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" required />
            <span></span>
            <label>Username</label>
          </div>
          <div class="txt_field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div class="pass">Forgot Password?</div>
          <input type="submit" value="Login" />
          <div class="signup_link">
            Not a member? <a href="#">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppLogin;
