import React from "react";
import { Button } from "@/components/ui/button";
import heartpulse from "@/assets/heartpulse.png"
import days from "@/assets/days.png"
import gift from "@/assets/gift.png"
import meals from "@/assets/meals.png"
import festive from "@/assets/festive.png"
import dedicated from "@/assets/dedicated.png"
import culture from "@/assets/culture.png"
import leave from "@/assets/leave.png"
import office from "@/assets/office.png"
import learning from "@/assets/learning.png"
import rewards from "@/assets/rewards.png"
import salary from "@/assets/salary.png"

const perks = [
  { image: heartpulse, title: "Health Insurance from First Day"},
  { image: days, title: "5 Days Working Per Week"},
  { image: gift, title: "Performance Appreciation Bonus" },
  { image: salary, title: "Competitive Salary & Benefits"},
  { image: meals, title: "Frequently Catered Meals"},
  { image: festive, title: "Festival, Birthday & Work Anniversary Celebration"},
  { image: dedicated, title: "Dedicated Pantry Area"},
  { image: culture, title: "Open Work Culture"},
  { image: leave, title: "Employee Friendly Leave Policies"},
  { image: office, title: "BrandNew Office"},
  { image: learning, title: "Learning Opportunities"},
  { image: rewards, title: "Competitive Compensation Performance Rewards"},
];

const PerksSection = () => {
  const scrollToOpenings = () => {
    const element = document.getElementById("current-openings");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#0b0e12]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            PERKS & <span className="gradient-text">BENEFITS</span>
          </h2>

          <p className="text-[#b5b0b0] max-w-2xl mx-auto mb-8">
            We care deeply about our team members and support their career growth.
            Here are some of the rewards and perks we offer to our employees.
          </p>

          <Button
            onClick={scrollToOpenings}
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 shadow-lg shadow-purple-500/20"
          >
            VIEW CURRENT OPENINGS
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {perks.map((perk, index) => {
            return (
              <div
                key={index}
                className="glass-card border border-white/10 rounded-2xl p-6 text-center
                hover:bg-white/5 transition-all duration-300 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div
                  className={`w-16 h-16  rounded-2xl flex items-center justify-center mx-auto mb-4
                  transition-transform duration-300 group-hover:scale-110 border border-white/10 animate-bounce`}
                >
                  <img src={perk.image} className="w-10 h-10" />
                </div>

                <h3 className="text-sm font-semibold text-[#edebeb] leading-tight">
                  {perk.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PerksSection;
