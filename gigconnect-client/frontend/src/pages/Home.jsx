import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="space-y-8"> 
      <Hero />

      <section className="mt-6"> 
        <Categories />
      </section>

      <section className="mt-6">
        <HowItWorks />
      </section>

      <section className="mt-6">
        <Pricing />
      </section>
      
      <section className="mt-6">  {/* 👈 New Section */}
        <Testimonials />
      </section>
    </div>
  );
}
