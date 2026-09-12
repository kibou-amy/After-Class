import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  alert("Your After Class account is ready!");
};

  return (
    <main className="auth-page">
   

     <section className="auth-form-panel">
  <div className="auth-card signup-card">

    <div className="form-heading">
      <img
        src="/src/assets/Logo.png"
        alt="After Class"
        className="heading-logo"
      />

        <h2>Add A Student</h2>
      
    </div>

     

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

            <label>Email address</label>
            <input type="email" placeholder="you@example.com" required />

            <label>Password</label>
            <div className="password-wrap">
            <input
  type={showPassword ? "text" : "password"}
  placeholder="Create a password"
  minLength="8"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
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

            <label>Confirm password</label>

<div className="password-wrap">

  <input
    type={showPassword ? "text" : "password"}
    placeholder="Confirm your password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    required
  />

</div>

{confirmPassword && password !== confirmPassword && (
  <p className="password-error">
    Passwords do not match.
  </p>
)}

            <button className="primary-btn" type="submit">Add Student</button>
            <button className="primary-btn" onClick={() => navigate("/StudentsList")}>Cancel</button>
          </form>


        </div>
      </section>
    </main>
  );
}
