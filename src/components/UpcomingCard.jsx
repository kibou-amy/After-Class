export default function UpcomingCard() {
  return (
    <section className="side-card">

      <div className="side-card-header">

        <h2>
          Upcoming
        </h2>

        <button>
          View all
        </button>

      </div>


      {/* BACKEND EVENTS WILL APPEAR HERE */}

      <div className="empty-side-content">

        <div className="side-empty-icon">
          ◷
        </div>

        <strong>
          No upcoming events
        </strong>

        <p>
          Events and deadlines will appear here.
        </p>

      </div>

    </section>
  );
}