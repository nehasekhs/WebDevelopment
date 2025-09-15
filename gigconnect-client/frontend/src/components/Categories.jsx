import React from "react";
import {
  Briefcase,
  Code,
  PenTool,
  Music,
  Camera,
  Globe,
  Film,
  ShoppingBag,
  BookOpen,
  Heart,
  Layers,
  Cpu,
} from "lucide-react";

const categories = [
  { name: "Development", icon: <Code size={26} />, color: "from-indigo-500 to-purple-600" },
  { name: "Design", icon: <PenTool size={26} />, color: "from-pink-500 to-rose-500" },
  { name: "Business", icon: <Briefcase size={26} />, color: "from-green-500 to-emerald-600" },
  { name: "Music", icon: <Music size={26} />, color: "from-yellow-400 to-orange-500" },
  { name: "Photography", icon: <Camera size={26} />, color: "from-sky-500 to-cyan-500" },
  { name: "Marketing", icon: <Globe size={26} />, color: "from-red-500 to-pink-600" },
  { name: "Film & Video", icon: <Film size={26} />, color: "from-purple-500 to-indigo-600" },
  { name: "E-Commerce", icon: <ShoppingBag size={26} />, color: "from-emerald-400 to-green-600" },
  { name: "Education", icon: <BookOpen size={26} />, color: "from-blue-400 to-indigo-500" },
  { name: "Health & Fitness", icon: <Heart size={26} />, color: "from-rose-500 to-pink-600" },
  { name: "UI/UX", icon: <Layers size={26} />, color: "from-teal-400 to-cyan-600" },
  { name: "AI & ML", icon: <Cpu size={26} />, color: "from-orange-400 to-red-600" },
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-950 text-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
            Explore Top Categories
          </h2>
          <p className="text-gray-400 text-lg">
            Discover services across multiple domains
          </p>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-marquee">
            {categories.concat(categories).map((cat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center min-w-[180px] h-36 rounded-2xl bg-gradient-to-br ${cat.color} transition hover:-translate-y-2 hover:shadow-xl cursor-pointer`}
              >
                <div className="text-white mb-2">{cat.icon}</div>
                <h3 className="text-sm font-semibold text-white text-center">
                  {cat.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
