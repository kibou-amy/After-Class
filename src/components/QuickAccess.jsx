import ClzroomIcon from "../assets/ClassIcon.png";
import MsgIcon from "../assets/msgicon.png";


export default function QuickAccess() {
  return (
    <section className="side-card quick-access">

      <div className="side-card-header">

        <h2>
          Quick access
        </h2>

      </div>


      <div className="quick-links">

        <button>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="#790C12">
  <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
</svg>


            <div>
            <strong>Messages</strong>
            <span>Your conversations</span>
          </div>

          <span className="quick-arrow">
            ›
          </span>

        </button>


        <button>
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="#790C12">
  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm0 15v-3l2.5 1.5L11 16v3H6zm12 0h-5v-2l2.5-1.5L18 17v2zm0-4h-5V9h5v6zm0-8h-5V5h5v2z"/>
</svg>


          <div>
            <strong>My Class</strong>
            <span>Your classmates</span>
          </div>

          <span className="quick-arrow">
            ›
          </span>

        </button>


      </div>

    </section>
  );
}