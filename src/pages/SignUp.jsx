import { useState } from "react";

export default function SignUp({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your After Class account is ready!");
  };

  return (
    <main className="auth-page">
   

     <section className="auth-form-panel">
  <div className="auth-card signup-card">

    <div className="form-heading">
      <img
        src="/src/assets/after-class-logo.png"
        alt="After Class"
        className="heading-logo"
      />

      <div>
        <p className="eyebrow">JOIN THE COMMUNITY</p>
        <h2>Create account</h2>
      </div>
    </div>

    <p className="form-intro">
      Start connecting beyond the classroom.
    </p>
     

          <form onSubmit={handleSubmit}>
            <div className="two-fields">
              <div>
                <label>First name</label>
                <input type="text" placeholder="Enter your first name" required />
              </div>
              <div>
                <label>Last name</label>
                <input type="text" placeholder="Enter your last name" required />
              </div>
            </div>

            <label>I am a...</label>
            <div className="role-options">
              <label className="role-option">
                <input type="radio" name="role" value="student" defaultChecked />
                <span>🎓 Student</span>
              </label>
              <label className="role-option">
                <input type="radio" name="role" value="coach" />
                <span>🏆 Coach</span>
              </label>
            </div>

            <label>Email address</label>
            <input type="email" placeholder="you@example.com" required />

            <label>Password</label>
            <div className="password-wrap">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                minLength="8"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <label className="terms">
              <input type="checkbox" required />
              <span>I agree to the community guidelines and terms.</span>
            </label>

            <button className="primary-btn" type="submit">Create account</button>
          </form>

          <p className="switch-text">
            Already have an account?
            <button onClick={onLogin}>Log in</button>
          </p>
        </div>
      </section>
    </main>
  );
}
