import { Link } from "react-router-dom";
import Nour from "../assets/Nour.jpg"

export default function Sidebar() {
  return (
    <nav className="sidebar">

      <div className="sidebar-main">

        <a
          href="#"
          className="sidebar-link active"
        >
          <span>⌂</span>
          Home
        </a>

        <a
          href="myclass"
          className="sidebar-link"
        >
          <span>✎</span>
          My Class
        </a>





        <Link
  to="/messages"
  className="sidebar-link"
>
  <span>✉</span>
  Messages

  <span className="sidebar-count"></span>
</Link>






      <div className="sidebar-main">

        <a
          href="Saved"
          className="sidebar-link"
        >
          <span>☆</span>
          Saved posts
        </a>



        <a
          href="#"
          className="sidebar-link"
        >
          <span>⚙</span>
          Settings
        </a>

      </div>
</div>

      <div className="help-card">

        <div className="help-icon">
        <img src={Nour} alt="Coach's pfp"></img> 
        </div>



        <div>
          <strong>Need help?</strong>
          <p>Contact your coach</p>
        </div>

      </div>

    </nav>
  );
}