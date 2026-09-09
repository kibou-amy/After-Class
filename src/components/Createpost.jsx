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


        <button className="post-input">
          What's happening in your class?
        </button>

      </div>


      <div className="create-post-actions">

        <button>
          <span>
            <img src={PhotoIcon} alt="Photo" />
          </span>
          Photo
        </button>


        <button>
          <span>
            <img src={FileIcon} alt="File" />
          </span>
          File
        </button>


        <button>
          <span>
            <img src={EventIcon} alt="Event" />
          </span>
          Event
        </button>


        <button className="post-submit">
          Post
        </button>

      </div>

    </section>
  );
}