import { useState } from "react";
import { Home, MessageSquare, Settings, BookOpen, Users, } from "lucide-react";
import logo from "../assets/Logo.png";
import "../styles/myclass.css";

export default function MyClass() {

  const [message, setMessage] = useState("");

  const [classMessages, setClassMessages] = useState([
    {
      id: 1,
      name: "Coach nour",
      message: "Hey everyone! Welcome to our class 👋",
      time: "10:30",
      type: "received",
    },
    {
      id: 2,
      name: "You",
      message: "Thanks Coach! Happy to be here.",
      time: "10:31",
      type: "sent",
    },
    {
      id: 3,
      name: "Ahmed",
      message: "How is everyone doing?",
      time: "10:32",
      type: "received",
    },
    {
      id: 4,
      name: "You",
      message: "Everything is going really well!",
      time: "10:33",
      type: "sent",
    },
    {
      id: 5,
      name: "Coach nour",
      message: "That's great! Don't forget about today's project.",
      time: "10:34",
      type: "received",
    },
  ]);

  const classmates = [
    {
      id: 1,
      name: "Zaki",
      online: true,
      message: "Hey! How are you?",
      time: "10:32",
      unread: 2,
    },
    {
      id: 2,
      name: "Abdellah",
      online: true,
      message: "Did you finish the project?",
      time: "09:45",
      unread: 0,
    },
    {
      id: 3,
      name: "Coach nour",
      online: false,
      message: "Great work today!",
      time: "Yesterday",
      unread: 1,
      coach: true,
    },
    {
      id: 4,
      name: "Amel",
      online: true,
      message: "See you tomorrow!",
      time: "Yesterday",
      unread: 0,
    },
    {
      id: 5,
      name: "Ilhem",
      online: true,
      message: "Good work everyone!",
      time: "Yesterday",
      unread: 0,
    },
    {
      id: 6,
      name: "Alae",
      online: true,
      message: "See you tomorrow!",
      time: "Yesterday",
      unread: 0,
    },
  ];


  const sendMessage = () => {

    if (!message.trim()) {
      return;
    }

    const newMessage = {
      id: Date.now(),
      name: "You",
      message: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      type: "sent",
    };

    setClassMessages((previous) => [
      ...previous,
      newMessage,
    ]);

    setMessage("");
  };


  return (

    <main className="myclass-page">

      {/* =====================================
          LEFT SIDEBAR
      ===================================== */}

      <aside className="myclass-sidebar">


        {/* =====================================
            LOGO + NAVIGATION
        ===================================== */}

        <div className="myclass-top">

          <div className="myclass-logo">
            <img
              src={logo}
              alt="After Class"
            />
          </div>

<nav className="myclass-nav">

  <a
    href="/"
    title="Home"
  >
    <Home size={22} strokeWidth={2} />
  </a>

  <a
    href="/messages"
    title="Messages"
  >
    <MessageSquare size={22} strokeWidth={2} />
  </a>

  <a
    href="/my-class"
    className="active"
    title="My Class"
  >
    <BookOpen size={22} strokeWidth={2} />
  </a>

  <a
    href="/settings"
    title="Settings"
  >
    <Settings size={22} strokeWidth={2} />
  </a>

</nav>

        </div>


       <div className="myclass-new-message">
  <button className="new-message-button">
    + New Message
  </button>
</div>




        {/* =====================================
            SEARCH
        ===================================== */}

   
        <div className="myclass-search">
  <input
    type="text"
    placeholder="Search classmates..."
  />
</div>



        {/* =====================================
            CLASSMATES TITLE
        ===================================== */}

        <div className="classmates-heading">

          <span>
            CLASSMATES
          </span>

          <span>
            24
          </span>

        </div>


        {/* =====================================
            CLASSMATES
        ===================================== */}

        <div className="classmate-list">

          {classmates.map((person) => (

            <div
              className={
                `classmate-item ${
                  person.coach ? "coach-item" : ""
                }`
              }
              key={person.id}
            >

              {/* Avatar */}

              <div className="classmate-avatar">

                {person.name
                  .charAt(0)
                  .toUpperCase()
                }

                <span
                  className={
                    person.online
                      ? "online"
                      : "offline"
                  }
                />

              </div>


              {/* Information */}

              <div className="classmate-content">

                <div className="classmate-top">

                  <strong>
                    {person.name}
                  </strong>

                  <span className="classmate-time">
                    {person.time}
                  </span>

                </div>


                <div className="classmate-bottom">

                  <span
                    className={
                      person.online
                        ? "status online-text"
                        : "status offline-text"
                    }
                  >
                    {person.online
                      ? "Online"
                      : "Offline"
                    }
                  </span>

                  <span className="separator">
                    •
                  </span>

                  <span className="last-message">
                    {person.message}
                  </span>

                </div>

              </div>


              {/* Unread */}

              {person.unread > 0 && (

                <span className="unread-number">
                  {person.unread}
                </span>

              )}

            </div>

          ))}

        </div>

      </aside>


      {/* =====================================
          RIGHT SIDE
      ===================================== */}

      <section className="myclass-chat">


        {/* =====================================
            CHAT HEADER
        ===================================== */}

        <header className="myclass-header">

  <div className="header-avatar">
    <Users size={22} strokeWidth={2.2} />
  </div>

  <div className="header-information">

    <h2>
      Web Development
    </h2>

    <p>
      24 classmates · Coach Karim
    </p>

  </div>

</header>


        {/* =====================================
            CHAT MESSAGES
        ===================================== */}

        <div className="myclass-messages">

          {classMessages.map((item) => (

            <div
              key={item.id}
              className={`class-message ${item.type}`}
            >

              {item.type === "received" && (

                <div className="small-avatar">

                  {item.name
                    .charAt(0)
                    .toUpperCase()
                  }

                </div>

              )}


              <div className="message-wrapper">

                {item.type === "received" && (

                  <span className="sender-name">
                    {item.name}
                  </span>

                )}

                <div className="message-bubble">

                  <p>
                    {item.message}
                  </p>

                  <span>
                    {item.time}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* =====================================
            MESSAGE INPUT
        ===================================== */}

        <div className="myclass-input-wrapper">

          <div className="myclass-input">

            <button className="emoji-button">
              😊
            </button>

            <input
              type="text"
              placeholder="Write something to your class..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              onKeyDown={(e) => {

                if (e.key === "Enter") {
                  sendMessage();
                }

              }}
            />

            <button className="attachment-button">
              📎
            </button>

            <button
              className="send-button"
              onClick={sendMessage}
            >
              Send
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}