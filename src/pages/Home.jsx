import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import ProfileCard from "../components/ProfileCard";
import QuickAccess from "../components/QuickAccess";

import OnlinePeople from "../components/OnlinePeople";


export default function Home() {

  /*
    ==========================================
    BACKEND DATA WILL GO HERE LATER
    ==========================================

    const user = await getCurrentUser();
    const posts = await getPosts();
    const messages = await getMessages();
    const events = await getEvents();
    const onlineUsers = await getOnlineUsers();

    For now EVERYTHING is empty.
  */

  const posts = [];

  return (
    <div className="app">

      <Navbar />

      <div className="main-layout">

        {/* =====================================
            LEFT COLUMN
        ===================================== */}

        <aside className="left-column">

          <ProfileCard />

          <Sidebar />

        </aside>


        {/* =====================================
            CENTER COLUMN
        ===================================== */}

        <main className="home-feed">

          <section className="welcome-section">

            <div>
              <p className="welcome-label">
                AFTER CLASS
              </p>

              <h1>
                Welcome back.
              </h1>

              <p className="welcome-text">
                Stay connected with your school community.
              </p>
            </div>

          </section>


          <CreatePost />


          <div className="feed-heading">

            <div>
              <h2>Recent posts</h2>
              <p>What's happening around your school</p>
            </div>

            <button className="sort-button">
              Latest
              <span>  ↓  </span>
            </button>

          </div>


          <div className="posts-container">

            {posts.length > 0 ? (

              posts.map((post) => (
                <Post
                  key={post.id}
                  post={post}
                />
              ))

            ) : (

              <div className="empty-feed">

                <div className="empty-feed-icon">
                  ︾
                </div>

                <h3>
                  Your feed is waiting
                </h3>

                <p>
                  Posts from students and coaches will appear here.
                </p>

              </div>

            )}

          </div>

        </main>


        {/* =====================================
            RIGHT COLUMN
        ===================================== */}

        <aside className="right-column">

          <QuickAccess />

      

          <OnlinePeople />

        </aside>

      </div>

    </div>
  );
}