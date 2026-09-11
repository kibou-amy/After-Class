import logo from "../assets/Logo.png";

export default function Navbar() { 
  return ( 

    <header className="navbar"> 

      {/* LOGO */} 
      <div className="navbar-logo"> 
        <img 
          src={logo}
          alt="After Class Logo" 
          className="navbar-logo-img"
        />
      </div>

      {/* SEARCH */} 
      <div className="search-container"> 
        <span className="search-icon">⌕</span>
        <input 
          type="text" 
          placeholder="Search students, coaches..." 
        />
      </div>

      {/* NAVIGATION RIGHT */} 
      <div className="navbar-right"> 

        <button className="navbar-icon"> 
          ✉
          <span className="nav-count"></span>
        </button> 


        {/* PROFILE */} 
        <button className="navbar-profile"> 

          {/* BACKEND USER IMAGE */} 
          <div className="navbar-avatar">?</div>

          <div className="navbar-user-info"> 
            {/* BACKEND USER NAME */} 
            <strong></strong>

            {/* BACKEND USER ROLE */} 
            <span></span>
          </div>


        </button> 

      </div> 

    </header> 
  ); 
}