import { useState } from "react";
import logo from "../assets/Logo.png";
import { Home, MessageSquare, Settings, BookOpen } from "lucide-react";

export default function Messages() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const conversations = [
    {
      id: 1,
      name: "Zaki",
      role: "Student",
      online: true,
      message: "Hey! How are you?",
      time: "10:32",
      unread: 2,
    },
    {
      id: 2,
      name: "Abdellah",
      role: "Student",
      online: true,
      message: "Did you finish the project?",
      time: "09:45",
      unread: 0,
    },
    {
      id: 3,
      name: "Coach nour",
      role: "Coach",
      online: false,
      message: "Great work today!",
      time: "Yesterday",
      unread: 1,
    },
    {
      id: 4,
      name: "Amel",
      role: "Student",
      online: true,
      message: "See you tomorrow!",
      time: "Yesterday",
      unread: 0,
    },
    {
      id: 5,
      name: "Ilhem",
      role: "Student",
      online: true,
      message: "See you tomorrow!",
      time: "Yesterday",
      unread: 0,
    },
    {
      id: 6,
      name: "Alae",
      role: "Student",
      online: true,
      message: "See you tomorrow!",
      time: "Yesterday",
      unread: 0,
    },
  ];

  return (
    <main className="messages-page">

      {/* =========================================
          LEFT SIDE
      ========================================= */}

     <aside className="messages-sidebar">

  {/* LOGO + HORIZONTAL NAVIGATION */}
  <div className="messages-sidebar-top">

    {/* Logo */}
    <div className="messages-logo">
      <img src={logo} alt="After Class" />
    </div>

  <nav className="messages-nav">

  <a href="/" title="Home">
    <Home size={21} strokeWidth={2} />
  </a>

  <a href="/messages" className="active" title="Messages">
    <MessageSquare size={21} strokeWidth={2} />
  </a>

  <a href="/myclass" title="My Class">
    <BookOpen size={21} strokeWidth={2} />
  </a>

  <a href="/settings" title="Settings">
    <Settings size={21} strokeWidth={2} />
  </a>

</nav>

  </div>


  {/* New Message */}
  <button className="new-message-btn">
    + New Message
  </button>

        {/* Search */}
        <div className="search-messages">
          <input
            type="text"
            placeholder="Search messages..."
          />
        </div>

        {/* Conversations */}
        <div className="conversation-list">

          {conversations.map((person) => (

            <div
              key={person.id}
              className={`conversation ${
                selectedPerson?.id === person.id
                  ? "active"
                  : ""
              }`}
              onClick={() => setSelectedPerson(person)}
            >

              {/* Avatar */}
              <div className="conversation-avatar">
                {person.name.charAt(0).toUpperCase()}
              </div>

              {/* Information */}
              <div className="conversation-info">

                <div className="conversation-top">

                  <strong>
                    {person.name}
                  </strong>

                  <span className="conversation-time">
                    {person.time}
                  </span>

                </div>

                <div className="conversation-bottom">

                  {/* ONLINE / OFFLINE */}
                  <span
                    className={`conversation-status ${
                      person.online
                        ? "online"
                        : "offline"
                    }`}
                  >
                    {person.online ? "Online" : "Offline"}
                  </span>

                  <span className="last-message">
                    {person.message}
                  </span>

                </div>

              </div>

              {/* Unread */}
              {person.unread > 0 && (
                <span className="unread">
                  {person.unread}
                </span>
              )}

            </div>

          ))}

        </div>

      </aside>


      {/* =========================================
          RIGHT CHAT AREA
      ========================================= */}

      <section className="chat-area">

        {selectedPerson ? (

          <>

            {/* =====================================
                CHAT HEADER
            ===================================== */}

            <div className="chat-header">

              <div className="chat-user-avatar">
                {selectedPerson.name
                  .charAt(0)
                  .toUpperCase()}
              </div>

              <div className="chat-user-info">

                <h2>
                  {selectedPerson.name}
                </h2>

                <p
                  className={
                    selectedPerson.online
                      ? "status-online"
                      : "status-offline"
                  }
                >
                  {selectedPerson.online
                    ? "Online"
                    : "Offline"}
                </p>

              </div>

            </div>


            {/* =====================================
                SCROLLABLE MESSAGES
            ===================================== */}

            <div className="chat-messages">

              <div className="message received">
                <p>
                  Hey! Welcome to After Class 👋
                </p>

                <span>
                  10:30
                </span>
              </div>


              <div className="message sent">
                <p>
                  Thanks! Nice to connect with you.
                </p>

                <span>
                  10:31
                </span>
              </div>


              <div className="message received">
                <p>
                  How is your project going?
                </p>

                <span>
                  10:32
                </span>
              </div>


              <div className="message sent">
                <p>
                  It's going really well!
                </p>

                <span>
                  10:33
                </span>
              </div>


              <div className="message received">
                <p>
                  That's great! Let me know if you
                  need any help.
                </p>

                <span>
                  10:34
                </span>
              </div>


              <div className="message sent">
                <p>
                  Thank you! I really appreciate it.
                </p>

                <span>
                  10:35
                </span>
              </div>

            </div>


            {/* =====================================
                MESSAGE INPUT
            ===================================== */}

            <div className="message-input-wrapper">

              <div className="message-input-area">

                <button className="emoji-btn">
                  😊
                </button>

                <input
                  type="text"
                  placeholder={`Message ${selectedPerson.name}...`}
                />

                <button className="attachment-btn">
                  📎
                </button>

                <button className="send-btn">
                  Send
                </button>

              </div>

            </div>

          </>

        ) : (

          /* =====================================
             NOTHING SELECTED
          ===================================== */

          <div className="empty-chat">

            <div className="empty-icon">
              💬
            </div>

            <h2>
              Select a conversation
            </h2>

            <p>
              Choose a student or coach to start chatting.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}