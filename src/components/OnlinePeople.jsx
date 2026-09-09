export default function OnlinePeople() {
  return (
    <section className="side-card">

      <div className="side-card-header">

        <h2>
          People online
        </h2>

        <span className="online-indicator">
          ●
        </span>

      </div>


      {/* BACKEND USERS WILL APPEAR HERE */}

      <div className="empty-online">

        <div className="online-avatars">

          <span>?</span>
          <span>?</span>
          <span>?</span>

        </div>

        <p>
          Students and coaches online will appear here.
        </p>

      </div>

    </section>
  );
}