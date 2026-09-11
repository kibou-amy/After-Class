import PhotoIcon from "../assets/picture.png";
import FileIcon from "../assets/backlog.png";
import EventIcon from "../assets/event.png";
export default function CreatePost() {
  return (
    <section className="create-post">

      <div className="create-post-top">

        {/* BACKEND USER AVATAR */}

        <div className="create-avatar">
          ?
        </div>


       <input class="post-input" type="text" placeholder="what's new in your class"></input>
        

      </div>


      <div className="create-post-actions">

        <button>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="96" fill="#FFFFFF"/>
  <path fill="#790C12" d="M336 144v208c0 44.2-35.8 80-80 80s-80-35.8-80-80V152c0-26.5 21.5-48 48-48s48 21.5 48 48v184c0 8.8-7.2 16-16 16s-16-7.2-16-16V152h-32v184c0 26.5 21.5 48 48 48s48-21.5 48-48V144c0-44.1-35.9-80-80-80s-80 35.9-80 80v216c0 61.9 50.1 112 112 112s112-50.1 112-112V144h-32z"/>
</svg>

          </span>
          Photo
        </button>


        <button>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="96" fill="#FFFFFF"/>
  <path fill="#790C12" d="M384 112H128c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48zm16 240c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16V160c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16v192zm-64-144a32 32 0 1 0-64 0 32 32 0 1 0 64 0zm-176 112l48-64 40 53.3 32-42.7 56 73.3H160z"/>
</svg>

          </span>
          File
        </button>


      
         


        <button className="post-submit">
          Post
        </button>

      </div>

    </section>
  );
}