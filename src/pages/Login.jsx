import { useState } from "react";

export default function Login({ onSignUp }) {
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
        src="/src/assets/after-class-logo.png"
        alt="After Class"
        className="heading-logo"
      />

      <div>
        <p className="eyebrow">WELCOME BACK</p>
        <h2>Log in</h2>
      </div>
    </div>

    <p className="form-intro">
      Continue your After Class community.
    </p>
      

          <form onSubmit={handleSubmit}>
            <label>Email address</label>
            <input type="email" placeholder="you@example.com" required />

            <div className="label-row">
              <label>Password</label>
              <button type="button" className="forgot">Forgot password?</button>
            </div>

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

            <label className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button className="primary-btn" type="submit">Log in</button>
          </form>

          <div className="divider"><span>or</span></div>

          <button className="secondary-btn" type="button">Continue with Google</button>

          <p className="switch-text">
            New to After Class?
            <button onClick={onSignUp}>Create an account</button>
          </p>
        </div>
      </section>
    </main>
  );
}
