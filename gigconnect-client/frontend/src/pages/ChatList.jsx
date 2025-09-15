import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export default function ChatList() {
  const freelancers = [
    { id: 1, name: "Alex Johnson (Web Developer)" },
    { id: 2, name: "Sophia Lee (UI/UX Designer)" },
    { id: 3, name: "Michael Brown (React Expert)" },
  ];

  return (
    <div className="p-6 bg-gray-950 text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-400">
        Freelancer Chats
      </h2>
      <ul className="space-y-4 max-w-xl mx-auto">
        {freelancers.map((freelancer) => (
          <li
            key={freelancer.id}
            className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                <span className="font-bold text-white">
                  {freelancer.name[0]}
                </span>
              </div>
              <span>{freelancer.name}</span>
            </div>
            <Link
              to={`/chat/${freelancer.id}`}
              className="px-3 py-1 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2 text-sm"
            >
              <MessageCircle size={16} /> Chat
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
