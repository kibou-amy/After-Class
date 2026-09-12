import { Link } from "react-router-dom";

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
          href="myclasses"
          className="sidebar-link"
        >
          <span>✎</span>
          My Classes
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


    </nav>
  );
}