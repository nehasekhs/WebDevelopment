import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Briefcase, MessageSquare, DollarSign, Layers, Trash2, CheckCircle } from "lucide-react";

export default function Dashboard() {
  const { user, projects = [], deleteProject, completeProject } = useAuth();

  const stats = {
    projects: projects.length,
    gigs: 0,
    messages: 0,
    earnings: projects.reduce((sum, p) => sum + (parseInt(p.budget) || 0), 0),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Welcome */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Welcome back,{" "}
            <span className="text-indigo-500">{user?.name || "User"}!</span>
          </h1>
          <p className="text-gray-400 mt-2">
            Manage your projects, gigs, and chats all in one place.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Projects"
            value={stats.projects}
            subtitle="Active this month"
            icon={<Layers className="w-5 h-5 text-indigo-400" />}
          />
          <StatCard
            title="Gigs"
            value={stats.gigs}
            subtitle="Ongoing contracts"
            icon={<Briefcase className="w-5 h-5 text-green-400" />}
          />
          <StatCard
            title="Messages"
            value={stats.messages}
            subtitle="Unread chats"
            icon={<MessageSquare className="w-5 h-5 text-yellow-400" />}
          />
          <StatCard
            title="Earnings"
            value={`$${stats.earnings}`}
            subtitle="Total budget posted"
            icon={<DollarSign className="w-5 h-5 text-pink-400" />}
          />
        </div>

        {/* Projects List */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-indigo-400">
            Your Projects
          </h2>
          {projects.length > 0 ? (
            <ul className="space-y-3 text-sm text-gray-300">
              {projects.map((project) => (
                <li
                  key={project.id}
                  className="p-4 rounded bg-gray-800 border border-gray-700 flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-bold">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p
                      className={`text-sm ${
                        project.status === "Completed"
                          ? "text-green-400"
                          : "text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </p>
                    <p className="text-sm text-green-400">${project.budget}</p>

                    {/* Actions */}
                    {project.status !== "Completed" && (
                      <button
                        onClick={() => completeProject(project.id)}
                        className="p-2 rounded bg-green-700 hover:bg-green-800"
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => deleteProject(project.id)}
                      className="p-2 rounded bg-red-700 hover:bg-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">
              No projects yet. Start by posting one!
            </p>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/post-project"
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full font-semibold shadow-lg transition"
          >
            + Post a New Project
          </Link>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, icon }) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow hover:shadow-indigo-500/20 transition">
      <div className="flex items-center justify-between">
        <h2 className="text-gray-400 text-sm">{title}</h2>
        {icon}
      </div>
      <p className="text-2xl font-bold mt-2">{value}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  );
}
