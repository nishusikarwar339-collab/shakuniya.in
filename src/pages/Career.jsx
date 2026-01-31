import React from "react";
import CareerHero from "@/components/career/CareerHero";
import PerksSection from "@/components/career/PerksSection";
import CurrentOpenings from "@/components/career/CurrentOpenings";
import ApplyForm from "@/components/career/ApplyForm";

const Career = () => {
  return (
    <div className="min-h-screen">
      <CareerHero />
      <PerksSection />
      <CurrentOpenings />
      <ApplyForm />
    </div>
  );
};

export default Career;
