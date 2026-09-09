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

          <div className="Icon-msg">
            <img src={MsgIcon} alt="message"/>  
          </div>

          <div>
            <strong>Messages</strong>
            <span>Your conversations</span>
          </div>

          <span className="quick-arrow">
            ›
          </span>

        </button>


        <button>

          <div className="Icon-class">
            <img src={ClzroomIcon} alt="classroom"/>
          </div>

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