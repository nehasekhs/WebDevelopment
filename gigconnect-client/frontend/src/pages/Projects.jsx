const dummyProjects = [
  { id: 1, title: "Build a React Website", budget: 500 },
  { id: 2, title: "E-commerce App", budget: 1200 },
];

export default function Projects() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Projects</h2>
      <ul className="space-y-4">
        {dummyProjects.map((p) => (
          <li
            key={p.id}
            className="bg-gray-800 p-4 rounded-lg flex justify-between"
          >
            <span>{p.title}</span>
            <span className="font-bold">${p.budget}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
