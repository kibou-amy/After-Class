import Navbar from "../components/Navbar";
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
                User profile picture will be displayed here
            */}
            <div className="profilepage-avatar">
              <span>?</span>
            </div>

          </div>

          <div className="profilepage-header-info">

            <div className="profilepage-name-area">

              {/* BACKEND:
                  User's name will be inserted here
              */}
              <h1>
                Your name
              </h1>

              {/* BACKEND:
                  User's role will be inserted here
              */}
              <p>
                Student
              </p>

              {/* BACKEND:
                  User's course will be inserted here
              */}
              <span>
                Your course
              </span>

            </div>

            {/* BACKEND:
                Connect this button to the edit-profile functionality
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
              <strong>—</strong>
              <span>Posts</span>
            </div>

            <div className="profilepage-stat">
              {/* BACKEND: number of classmates */}
              <strong>—</strong>
              <span>Classmates</span>
            </div>

            <div className="profilepage-stat">
              {/* BACKEND: course name */}
              <strong>—</strong>
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

            {/* BACKEND:
                Connect to edit functionality
            */}
            <button className="section-edit-btn">
              Edit
            </button>

          </div>

          {/* BACKEND:
              User's biography goes here
          */}
          <div className="profilepage-empty-box">
            <p>
              Your bio will appear here.
            </p>
          </div>

        </section>

        {/* =================================
            PROFILE INFORMATION
        ================================= */}
        <section className="profilepage-section">

          <div className="section-title-row">

            <h2>Profile information</h2>

            {/* BACKEND:
                Connect to edit functionality
            */}
            <button className="section-edit-btn">
              Edit
            </button>

          </div>

          <div className="information-grid">

            <div className="information-item">

              <span>Email</span>

              {/* BACKEND:
                  User email goes here
              */}
              <p>—</p>

            </div>

            <div className="information-item">

              <span>Course</span>

              {/* BACKEND:
                  User course goes here
              */}
              <p>—</p>

            </div>

            <div className="information-item">

              <span>Year</span>

              {/* BACKEND:
                  User academic year goes here
              */}
              <p>—</p>

            </div>

            <div className="information-item">

              <span>Joined</span>

              {/* BACKEND:
                  Account creation date goes here
              */}
              <p>—</p>

            </div>

          </div>

        </section>

        {/* =================================
            EDIT PROFILE
        ================================= */}
        <section className="profile-edit-card">

          <div>

            <h2>
              Keep your profile updated
            </h2>

            <p>
              Add information about yourself so your
              classmates can get to know you.
            </p>

          </div>

          {/* BACKEND:
              Connect this button to the edit profile form/modal
          */}
          <button className="profile-edit-main-btn">
            Edit profile
          </button>

        </section>

      </main>
    </>
  );
}