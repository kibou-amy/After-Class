
import Navbar from "../components/Navbar";
import ilhem from "../assets/Ilhem.jpg";

export default function Profile() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      {/* MAIN PROFILE PAGE */}
      <main className="profilepage-content">

        {/* =================================
            PROFILE HEADER
        ================================= */}
        <section className="profilepage-header">

          {/* Cover */}
          <div className="profilepage-cover">
            {/* BACKEND:
                User cover picture will be displayed here
            */}
          </div>

          {/* =================================
              PROFILE PICTURE
              OUTSIDE COVER SO IT CAN OVERLAP
          ================================= */}
          <div className="profilepage-avatar">
            <img src={ilhem} alt="Profile" />
          </div>

          {/* =================================
              PROFILE HEADER INFO
          ================================= */}
          <div className="profilepage-header-info">

            <div className="profilepage-name-area">

              {/* BACKEND: User's name */}

              <h1>ILHEM ZERKAOUI</h1>

              {/* BACKEND: User's role */}
              <p>Student</p>

              {/* BACKEND: User's course */}
              <span>Web Development</span>

            </div>

            {/* BACKEND:
                Connect to edit profile functionality
            */}
            <button className="edit-profile-btn">
              Edit profile
            </button>

          </div>

          {/* =================================
              PROFILE STATS
          ================================= */}
          <div className="profilepage-stats">

            <div className="profilepage-stat">
              {/* BACKEND: number of posts */}
              <strong>5</strong>
              <span>Posts</span>
            </div>

            <div className="profilepage-stat">
              {/* BACKEND: number of classmates */}
              <strong>10</strong>
              <span>Classmates</span>
            </div>

            <div className="profilepage-stat">
              {/* BACKEND: course name */}
              <strong>Web Dev </strong>
              <span>Course</span>
            </div>

          </div>

        </section>

        {/* =================================
            ABOUT SECTION
        ================================= */}
        <section className="profilepage-section">

          <div className="section-title-row">
            <h2>About</h2>
       
            {/* BACKEND: Edit functionality */}
            <button className="section-edit-btn">
              Edit
            </button>
          </div>

          {/* BACKEND: User biography */}
          <div className="profilepage-empty-box">
            <p>Your bio will appear here.</p>
          </div>

        </section>

        {/* =================================
            PROFILE INFORMATION
        ================================= */}
        <section className="profilepage-section">

          <div className="section-title-row">
            <h2>Profile information</h2>

            {/* BACKEND: Edit functionality */}
            <button className="section-edit-btn">
              Edit
            </button>
          </div>

          <div className="information-grid">

            <div className="information-item">
              <span>Email</span>
              {/* BACKEND: User email */}
              <p>—</p>
            </div>

            <div className="information-item">
              <span>Course</span>
              {/* BACKEND: User course */}
              <p>—</p>
            </div>

            <div className="information-item">
              <span>Year</span>
              {/* BACKEND: Academic year */}
              <p>—</p>
            </div>

            <div className="information-item">
              <span>Joined</span>
              {/* BACKEND: Account creation date */}
              <p>—</p>
            </div>

          </div>

        </section>

        {/* =================================
            EDIT PROFILE
        ================================= */}
        <section className="profile-edit-card">

          <div>
            <h2>Keep your profile updated</h2>

            <p>
              Add information about yourself so your
              classmates can get to know you.
            </p>
          </div>

          {/* BACKEND: Edit profile form/modal */}
          <button className="profile-edit-main-btn">
            Edit profile
          </button>

        </section>

      </main>
    </>
  );
}