import React from "react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for trying out GigConnect",
    features: [
      "Post up to 2 gigs",
      "Basic chat support",
      "Browse freelancers",
    ],
    color: "from-indigo-500 to-purple-600",
  },
  {
    name: "Pro",
    price: "$19/mo",
    description: "For growing teams and frequent users",
    features: [
      "Unlimited gig posts",
      "Priority chat support",
      "Verified freelancers",
      "Project tracking dashboard",
    ],
    color: "from-pink-500 to-rose-600",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$49/mo",
    description: "For companies that scale fast",
    features: [
      "Dedicated account manager",
      "Advanced analytics",
      "Custom integrations",
      "Team collaboration tools",
    ],
    color: "from-green-500 to-emerald-600",
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-950 text-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
            Pricing Plans
          </h2>
          <p className="text-gray-400 text-lg">
            Choose a plan that fits your hiring needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col p-8 rounded-2xl bg-gray-900 border border-gray-800 shadow-lg hover:-translate-y-2 hover:shadow-xl transition transform ${
                plan.popular ? "ring-2 ring-pink-500" : ""
              }`}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-3 right-4 bg-pink-500 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-4">{plan.description}</p>

              {/* Price */}
              <div
                className={`text-4xl font-extrabold mb-6 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
              >
                {plan.price}
              </div>

              {/* Features */}
              <ul className="flex-1 mb-6 space-y-3 text-gray-300">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-green-400">✔</span> {f}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-3 rounded-xl font-semibold text-black bg-gradient-to-r ${plan.color} hover:opacity-90 transition`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
    </section>
  );
}
