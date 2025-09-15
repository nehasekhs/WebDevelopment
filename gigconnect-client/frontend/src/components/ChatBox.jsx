import { useParams, useNavigate } from "react-router-dom";

const ChatBox = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy conversations
  const chats = {
    1: [
      { from: "user", text: "Hi, I need a portfolio website." },
      { from: "freelancer", text: "Sure! Do you have any design references?" },
      { from: "user", text: "Yes, I want something modern with React + Tailwind." },
    ],
    2: [
      { from: "user", text: "I need a dashboard for my SaaS app." },
      { from: "freelancer", text: "Got it! Do you want charts and analytics?" },
      { from: "user", text: "Yes, charts + user management." },
    ],
    3: [
      { from: "user", text: "Can you design a mobile app UI for me?" },
      { from: "freelancer", text: "Of course! Do you prefer light or dark theme?" },
      { from: "user", text: "Dark theme, modern design." },
    ],
  };

  const dummyMessages = chats[id] || [
    { from: "system", text: "No messages yet with this freelancer." },
  ];

  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 border-b border-gray-700 flex justify-between items-center">
        <button
          onClick={() => navigate("/chats")}
          className="text-sm px-3 py-1 bg-gray-700 rounded hover:bg-gray-600"
        >
          ← Back
        </button>
        <h2 className="text-lg font-bold">Chat with Freelancer #{id}</h2>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {dummyMessages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-xs px-4 py-2 rounded-lg ${
              msg.from === "user"
                ? "bg-blue-600 self-start"
                : msg.from === "freelancer"
                ? "bg-green-600 self-end ml-auto"
                : "bg-gray-600 mx-auto text-center"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <footer className="p-4 border-t border-gray-700">
        <form className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-gray-800 rounded-lg px-3 py-2 text-sm outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Send
          </button>
        </form>
      </footer>
    </section>
  );
};

export default ChatBox;
