import React from "react";

export default function ProfileModal({ onClose }) {
  return (
    <div className="profile-overlay" onClick={onClose}>
      <div
        className="profile-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button className="profile-close" onClick={onClose}>
          ×
        </button>

        {/* Cover */}
        <div className="profile-cover">
          <div className="profile-avatar">
            ?
          </div>
        </div>

        {/* Profile header */}
        <div className="profile-header">
          <div className="profile-title">
            <span className="profile-label">AFTER CLASS</span>

            <h1>Student Name</h1>

            <p className="profile-username">
              @studentname
            </p>
          </div>

          <button className="profile-message-btn">
            Message
          </button>
        </div>

        {/* Stats */}
        <div className="profile-stats">
          <div className="profile-stat">
            <strong>24</strong>
            <span>Posts</span>
          </div>

          <div className="profile-stat">
            <strong>86</strong>
            <span>Connections</span>
          </div>

          <div className="profile-stat">
            <strong>12</strong>
            <span>Classes</span>
          </div>
        </div>

        {/* Main profile content */}
        <div className="profile-content">
          {/* About */}
          <section className="profile-card">
            <h2>About me</h2>

            <p>
              Hey! I'm a student here at school. I love meeting
              new people, sharing ideas and keeping up with
              everything happening around campus.
            </p>
          </section>

          {/* My class */}
          <section className="profile-card">
            <h2>My class</h2>

            <div className="class-row">
              <div className="class-icon">📚</div>

              <div>
                <h3>My Class</h3>
                <p>School community</p>
              </div>
            </div>
          </section>

          {/* Recent posts */}
          <section className="profile-card">
            <div className="profile-section-heading">
              <h2>Recent posts</h2>
              <span>View all</span>
            </div>

            <div className="empty-profile-posts">
              <div className="empty-post-icon">⌁</div>

              <h3>No recent posts</h3>

              <p>
                Posts from this student will appear here.
              </p>
            </div>
          </section>

          {/* Connections */}
          <section className="profile-card">
            <div className="profile-section-heading">
              <h2>Connections</h2>
              <span>86 connections</span>
            </div>

            <div className="connection-avatars">
              <div>?</div>
              <div>?</div>
              <div>?</div>
              <div>?</div>
              <div>+</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}