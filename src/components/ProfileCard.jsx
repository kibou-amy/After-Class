import { Link } from "react-router-dom";


export default function ProfileCard() {
  return (
    <section className="profile-card">

      <div className="profile-cover"></div>

      <div className="profile-content">

        {/* BACKEND USER IMAGE */}

        <div className="profile-avatar">
          ?
        </div>


        {/* BACKEND USER INFO */}

        <h3></h3>

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