import React from "react";

const Experience = () => {
  const experiences = [
    /*{
      period: "2024 — PRESENT",
      role: "Senior Data Analyst",
      company: "Meridian Analytics — Remote",
      desc: "Lead analyst for a $50M ARR SaaS platform. Own the revenue intelligence stack from ingestion to executive reporting. Built a real-time churn alert system that reduced average intervention time from 5 days to 18 hours.",
      tags: ["BigQuery", "dbt", "Looker", "Python", "Airflow"],
    },
    {
      period: "2022 — 2024",
      role: "Data Analyst",
      company: "Cartova Retail Tech — Bengaluru",
      desc: "Owned inventory and supply chain analytics for a 200-store retail chain. Designed forecasting models that reduced out-of-stock events by 27% across the network and built the company's first self-serve BI platform.",
      tags: ["Tableau", "PostgreSQL", "Snowflake", "Scikit-learn"],
    },
    {
      period: "2021 — 2022",
      role: "Junior Data Analyst",
      company: "Finvox Capital — Mumbai",
      desc: "Supported credit risk modeling and regulatory reporting for a fintech lender. Automated monthly compliance reports saving 40+ analyst hours per month and built dashboards tracking portfolio performance across 6 loan products.",
      tags: ["SQL", "Power BI", "Excel", "R"],
    },*/
  ];

  return (
    <section id="experience" className="bg-panel px-6 md:px-16 py-24">
      <div className="section-tag">// career</div>
      <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold tracking-tight text-cream mb-4">
        Where I've worked
      </h2>
      <p className="text-base text-muted max-w-lg leading-relaxed mb-14">
        Five years across high-growth startups and enterprise teams — always in
        the seat closest to the data.
      </p>

      <div className="relative max-w-[760px]">
        <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />

        {experiences.map((exp, i) => (
          <div key={i} className="pl-9 pb-12 relative last:pb-0">
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-teal shadow-[0_0_10px_rgba(0,212,200,0.5)]" />

            <div className="font-jetbrains text-[0.68rem] text-muted tracking-wider mb-1.5">
              {exp.period}
            </div>
            <div className="font-space-grotesk font-semibold text-base mb-1">
              {exp.role}
            </div>
            <div className="text-teal text-sm mb-3">{exp.company}</div>
            <p className="text-sm text-muted leading-relaxed">{exp.desc}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {exp.tags.map((tag) => (
                <span key={tag} className="skill-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
