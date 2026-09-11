import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Welcome back to After Class!");
  };

  return (
    <main className="auth-page">
    
<section className="auth-form-panel">
  <div className="auth-card">

    <div className="form-heading">
      <img
        src="/src/assets/Logo.png"
        alt="After Class"
        className="heading-logo"
      />
         <h2>Log in</h2>
        <p className="eyebrow">WELCOME BACK</p>
       
      </div>
   

          <form onSubmit={handleSubmit}>
            <label>Email address</label>
            <input type="email" placeholder="you@example.com" required />

           <label>Password</label>

<div className="password-wrap">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Enter your password"
    required
  />

  <button
    type="button"
    className="password-toggle"
    onClick={() => setShowPassword(!showPassword)}
    aria-label="Show or hide password"
  >
    {showPassword ? "Hide" : "Show"}
  </button>
</div>

<button type="button" className="forgot">
  Forgot password?
</button>

            <label className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button className="primary-btn" type="submit">Log in</button>
          </form>

          <p className="switch-text">
  New to After Class?
  <button onClick={() => navigate("/signup")}>
    Create an account
  </button>
      </p>
        </div>
      </section>
    </main>
  );
}
