import React from "react";

const Skills = () => {
  const skills = [
    {
      icon: "🗄️",
      title: "Data Engineering",
      desc: "Designing robust pipelines that bring order to messy, high-volume data sources.",
      tags: ["SQL", "MySQL", "snowflake", "Airflow", "Spark", "Docker"],
    },
    {
      icon: "📊",
      title: "Business Intelligence",
      desc: "Building dashboards that answer real questions — not just dashboards that look busy.",
      tags: ["Power BI"],
    },
    {
      icon: "🐍",
      title: "Python Analytics",
      desc: "Statistical analysis, ML-assisted forecasting, and reproducible notebooks for stakeholders.",
      tags: ["Pandas", "NumPy", "Scikit-learn", "Plotly", "Seaborn"],
    },
    {
      icon: "🔬",
      title: "Statistical Analysis",
      desc: "A/B testing, regression modeling, and cohort analysis that hold up to scrutiny.",
      tags: ["A/B Testing", "Regression", "R", "Cohort Analysis"],
    },
    /*{
      icon: "☁️",
      title: "Cloud & Infrastructure",
      desc: "Moving data safely and efficiently at scale, across modern cloud platforms.",
      tags: ["AWS S3", "GCP", "Snowflake", "Databricks", "Fivetran"],
    },*/
    {
      icon: "🤝",
      title: "Stakeholder Comms",
      desc: "Translating numbers into narratives — from exec briefs to engineering specs.",
      tags: ["Data Storytelling", "Requirements", "Roadmapping"],
    },
  ];

  return (
    <section id="skills" className="bg-panel px-6 md:px-16 py-24">
      <div className="section-tag">// capabilities</div>
      <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold tracking-tight text-cream mb-4">
        What I bring to the table
      </h2>
      <p className="text-base text-muted max-w-lg leading-relaxed mb-14">
        From raw ingestion to polished presentation — I handle the full data
        lifecycle and communicate findings to both technical and business
        audiences.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-navy border border-border rounded-xl p-7 transition-all hover:border-teal hover:-translate-y-1"
          >
            <div className="text-2xl mb-4">{skill.icon}</div>
            <div className="font-space-grotesk font-semibold text-base mb-2.5">
              {skill.title}
            </div>
            <p className="text-sm text-muted leading-relaxed mb-3.5">
              {skill.desc}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {skill.tags.map((tag) => (
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

export default Skills;
