import React from "react";

const Stats = () => {
  const stats = [
    { number: "5+", label: "Years of experience" },
    { number: "40+", label: "Dashboards deployed" },
    { number: "$8M", label: "In decisions supported" },
    { number: "12", label: "Industries analyzed" },
  ];

  return (
    <div className="border-y border-border py-10 px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`text-center md:text-left ${i < stats.length - 1 ? "md:border-r border-border md:pr-10" : ""}`}
        >
          <div className="font-space-grotesk text-3xl md:text-4xl font-bold text-teal leading-none">
            {stat.number}
          </div>
          <div className="text-sm text-muted mt-1.5">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
