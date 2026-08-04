import React from "react";
import dashboard1 from "../assets/dashboard1.png";
import dashboard2 from "../assets/dashboard2.png";
import dashboard3 from "../assets/dashboard3.png";
import airflowUiForEtlPipeline from "../assets/Airflow-ui-for-ETL-pipeline.png";

const Projects = () => {
  const projects = [
    {
      category: "SQL · Power BI",
      title: "pizza sales dashboard",
      desc: "The dashboard is designed to provide a clear view of key performance indicators (KPIs) related to pizza sales, including Sales performance Order trends Product/category insights Overall business performance metrics",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/alanthampi/pizza_data_analysis",
        },
      ],
      bg: "bg-gradient-to-br from-[#0a1628] to-[#0d2040]",
      image: dashboard1,
    },
    {
      category: "Python · Machine Learning",
      title: "Insurance Retention Prediction and Visualization",
      desc: "Built predictive models Random Forest, and XGBoost to estimate insurance retention ratio . Performed EDA, feature engineering, and model evaluation to identify the best-performing algorithm.and later using the cleaned data created visualization in power bi",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/alanthampi/insurance-churn-project",
        },
        // {
        //   name: "Notebook",
        //   url: "https://colab.research.google.com/...",
        // },
      ],
      bg: "bg-gradient-to-br from-[#0a1a14] to-[#0d2820]",
      image: dashboard3,
    },
    {
      category: "Crypto Data ETL Pipeline · Data Engineering",
      title: "Binance Crypto data ETL pipeline",
      desc: "This project builds a complete end-to-end ETL workflow for cryptocurrency market data from Binance. It fetches exchange metadata and market statistics, transforms the data into a structured format, and loads it into MySQL for analytics and reporting. The pipeline is designed to run both locally and through Docker, with Airflow used for orchestration and scheduling.",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/alanthampi/crypto_pipeline",
        },
        // {
        //   name: "Dashboard",
        //   url: "https://your-dashboard-link.com",
        // },
      ],
      bg: "bg-gradient-to-br from-[#1a0a0a] to-[#280d0d]",
      image: airflowUiForEtlPipeline,
    },
    {
      category: "Power BI · Data Visualization",
      title: "Data Analyst Jobs Analysis",
      desc: "Developed a dashboard that lets you analyse the important skills for an Data analyst",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/alanthampi/data_jobs_project",
        },
      ],
      bg: "bg-gradient-to-br from-[#12100a] to-[#201e0d]",
      image: dashboard2,
    },
  ];
  return (
    <section id="projects" className="px-6 md:px-16 py-24">
      <div className="section-tag">// selected work</div>

      <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold tracking-tight text-cream mb-4">
        Projects that moved the needle
      </h2>

      <p className="text-base text-muted max-w-lg leading-relaxed mb-14">
        Each of these started as a business question without a clear answer.
        Here's how data helped find one.
      </p>

      <div className="grid md:grid-cols-2 gap-7">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-panel border border-border rounded-xl overflow-hidden transition-all hover:border-teal hover:-translate-y-1 cursor-pointer"
          >
            <div className={`h-[180px] overflow-hidden ${project.bg}`}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-border text-muted font-jetbrains text-sm">
                  Dashboard Preview
                </div>
              )}
            </div>

            <div className="p-6 pb-7">
              <div className="font-jetbrains text-[0.65rem] text-gold tracking-wider uppercase mb-2">
                {project.category}
              </div>

              <div className="font-space-grotesk font-semibold text-lg mb-2.5">
                {project.title}
              </div>

              <p className="text-sm text-muted leading-relaxed mb-4">
                {project.desc}
              </p>

              <div className="flex gap-3.5">
                {project.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-jetbrains text-[0.68rem] text-teal tracking-wide no-underline flex items-center gap-1 hover:underline"
                  >
                    → {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
