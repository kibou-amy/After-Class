import { Link } from "react-router-dom";
import nour from "../assets/Nour.jpg"
import ilhem from "../assets/Ilhem.jpg"


export default function ProfileCard() {
  return (
    <section className="profile-card">

      <div className="profile-cover"></div>

      <div className="profile-content">

        {/* BACKEND USER IMAGE */}

        <div className="profile-avatar">
          <img src={ilhem} alt="Profile picture"></img>
        </div>


        {/* BACKEND USER INFO */}

        <h3><b>Zerkaoui Ilhem</b></h3>

        <p className="profile-role"></p>

        <p className="profile-course"></p>


        <div className="profile-stats">

          <div>
            <strong>—</strong>
            <span>Posts</span>
          </div>

          <div>
            <strong>—</strong>
            <span>Classmates</span>
          </div>

        </div>
 
        <a href="Profile">
          <button className="view-profile">
            View profile
          </button>
        </a>

      </div>

    </section>
  );
}