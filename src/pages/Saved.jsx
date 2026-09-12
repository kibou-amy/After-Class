import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function SavedPosts() {
  return (
    <>
    <Navbar />
    
    <main className="saved-page"> 

      {/* =================================
          SAVED POSTS HEADER
      ================================= */}

      <section className="saved-hero">

        <div className="saved-hero-text">

          <span className="saved-eyebrow">
            YOUR PERSONAL COLLECTION
          </span>

          <h1>
            Saved <span>posts.</span>
          </h1>

          <p>
            Keep the posts, resources, and ideas
            you want to come back to.
          </p>

        </div>

        <div className="saved-hero-decoration">
          <span>✦</span>
          <span>♡</span>
        </div>

      </section>


      {/* =================================
          FILTERS
      ================================= */}

      <section className="saved-toolbar">

        <div className="saved-tabs">

          <button className="saved-tab active">
            All saved
          </button>

          {/* BACKEND:
              Filter saved posts by category
          */}
          <a href="StudySaved">
          <button className="saved-tab">
            Study resources
          </button>
          </a>



        </div>

        <div className="saved-sort">

          <span>Sort by</span>

          {/* BACKEND:
              Sort by newest / oldest
          */}
          <select defaultValue="recent">
            <option value="recent">Recently saved</option>
            <option value="oldest">Oldest saved</option>
          </select>

        </div>

      </section>


      {/* =================================
          SAVED POSTS CONTENT
      ================================= */}

      <section className="saved-content">

        <div className="saved-section-heading">

          <div>
            <span className="saved-small-label">
              YOUR COLLECTION
            </span>

            <h2>
              Saved for later
            </h2>
          </div>

          {/* BACKEND:
              Number of saved posts
          */}
          <span className="saved-count">
            —
          </span>

        </div>


        {/* =================================
            POST CARD 1
        ================================= */}

        <article className="saved-post-card">

          <div className="saved-post-top">

            <div className="saved-author">

              {/* BACKEND:
                  User profile picture
              */}
              <div className="saved-avatar">
                A
              </div>

              <div className="saved-author-info">

                {/* BACKEND:
                    Author name
                */}
                <h3>
                  Your classmate
                </h3>

                {/* BACKEND:
                    Course + post date
                */}
                <p>
                  Computer Science · 2h ago
                </p>

              </div>

            </div>

            {/* BACKEND:
                Unsave post functionality
            */}
            <button
              className="saved-bookmark-btn"
              aria-label="Remove from saved posts"
            >
              ♡
            </button>

          </div>


          <div className="saved-post-body">

            {/* BACKEND:
                Post category
            */}
            <span className="saved-post-tag">
              STUDY RESOURCE
            </span>

            {/* BACKEND:
                Post title
            */}
            <h2>
              C Programming — Pointers & Memory
            </h2>

            {/* BACKEND:
                Post content
            */}
            <p>
              A useful resource to review before
              the next lab. Save this for later!
            </p>

          </div>


          {/* BACKEND:
              Post image / file preview
          */}
          <div className="saved-post-attachment">

            <div className="attachment-icon">
              ✦
            </div>

            <div>
              <strong>
                Study resource
              </strong>

              <span>
                PDF · File preview placeholder
              </span>
            </div>

          </div>


          <div className="saved-post-footer">

            <div className="saved-post-stats">

              {/* BACKEND:
                  Likes and comments
              */}
              <span>♡ 24 likes</span>
              <span>♡ 6 comments</span>

            </div>

            <span className="saved-status">
              Saved
            </span>

          </div>

        </article>


        {/* =================================
            POST CARD 2
        ================================= */}

        <article className="saved-post-card">

          <div className="saved-post-top">

            <div className="saved-author">

              {/* BACKEND:
                  Author profile picture
              */}
              <div className="saved-avatar saved-avatar-light">
                M
              </div>

              <div className="saved-author-info">

                {/* BACKEND:
                    Author name
                */}
                <h3>
                  Your classmate
                </h3>

                {/* BACKEND:
                    Course + date
                */}
                <p>
                  Discrete Mathematics · Yesterday
                </p>

              </div>

            </div>

            <button
              className="saved-bookmark-btn"
              aria-label="Remove from saved posts"
            >
              ♡
            </button>

          </div>


          <div className="saved-post-body">

            {/* BACKEND:
                Post category
            */}
            <span className="saved-post-tag">
              REVISION NOTES
            </span>

            <h2>
              Graphs & Trees — Revision Notes
            </h2>

            <p>
              Important notes for the upcoming
              discrete mathematics revision.
            </p>

          </div>


          <div className="saved-post-attachment">

            <div className="attachment-icon">
              ✦
            </div>

            <div>
              <strong>
                Revision notes
              </strong>

              <span>
                PDF · 2 pages
              </span>
            </div>

          </div>


          <div className="saved-post-footer">

            <div className="saved-post-stats">

              <span>♡ 18 likes</span>
              <span>♡ 3 comments</span>

            </div>

            <span className="saved-status">
              Saved
            </span>

          </div>

        </article>


        {/* =================================
            BACKEND EMPTY STATE
        ================================= */}

        {/*
          BACKEND:
          If the user has no saved posts,
          show an empty state here instead.
        */}

      </section>

    </main>
    </>
  );
}