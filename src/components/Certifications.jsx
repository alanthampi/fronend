import React, { useState } from "react";

import bigdatacomputing from "../assets/certificates/bigdatacomputing.pdf";
import datacleaning from "../assets/certificates/datacleaning.png";
import datavisualization from "../assets/certificates/datavisualization.png";
import introductiontoindustry from "../assets/certificates/introductiontoindustry.pdf";
import introtomachinelearning from "../assets/certificates/introtomachinelearning.png";
import pandas from "../assets/certificates/pandas.png";
import technicalenglish from "../assets/certificates/technicalenglish.jpg";
import ciscocybersecurity from "../assets/certificates/ciscocybersecurity.pdf";
import introcybersecurity from "../assets/certificates/introcybersecurity.pdf";
import packettracer from "../assets/certificates/packettracer.pdf";
import cyberessentials from "../assets/certificates/cyberessentials.pdf";

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certifications = [
    {
      provider: "Kaggle",
      title: "Intro to Machine Learning",
      desc: "Learned the fundamentals of machine learning, including model building, validation, overfitting, underfitting, and Random Forest models.",
      skills: ["Machine Learning", "Scikit-learn", "Python"],
      certificate: introtomachinelearning,
      type: "image",
    },
    {
      provider: "Kaggle",
      title: "Pandas",
      desc: "Gained hands-on experience with data manipulation, filtering, grouping, merging, and analyzing datasets using the Pandas library.",
      skills: ["Python", "Pandas", "Data Analysis"],
      certificate: pandas,
      type: "image",
    },
    {
      provider: "Kaggle",
      title: "Data Visualization",
      desc: "Learned to create effective visualizations using Matplotlib and Seaborn to communicate insights from data.",
      skills: ["Matplotlib", "Seaborn", "Visualization"],
      certificate: datavisualization,
      type: "image",
    },
    {
      provider: "Kaggle",
      title: "Data Cleaning",
      desc: "Developed skills in handling missing values, inconsistent data, duplicates, and preparing datasets for analysis.",
      skills: ["Data Cleaning", "Pandas", "Preprocessing"],
      certificate: datacleaning,
      type: "image",
    },
    {
      provider: "Cisco Networking Academy",
      title: "Introduction to Cybersecurity",
      desc: "Studied the fundamentals of cybersecurity, cyber threats, risk management, and best security practices.",
      skills: ["Cybersecurity", "Networking", "Security"],
      certificate: introcybersecurity,
      type: "pdf",
    },
    {
      provider: "Cisco Networking Academy",
      title: "Cybersecurity Essentials",
      desc: "Covered network defense, cryptography, security operations, and protecting systems against cyber attacks.",
      skills: ["Cybersecurity", "Network Security", "Cryptography"],
      certificate: cyberessentials,
      type: "pdf",
    },
    {
      provider: "Cisco Networking Academy",
      title: "Introduction to Packet Tracer",
      desc: "Learned to design, configure, and simulate computer networks using Cisco Packet Tracer.",
      skills: ["Packet Tracer", "Networking", "Cisco"],
      certificate: packettracer,
      type: "pdf",
    },
    {
      provider: "NPTEL",
      title: "Big Data Computing",
      desc: "Studied concepts of big data, distributed computing, Hadoop ecosystem, and large-scale data processing.",
      skills: ["Big Data", "Hadoop", "Distributed Computing"],
      certificate: bigdatacomputing,
      type: "pdf",
    },
    {
      provider: "NPTEL",
      title: "Introduction to Industry 4.0 and Industrial Internet of Things",
      desc: "Learned about Industry 4.0 technologies, IoT architectures, smart manufacturing, and industrial automation.",
      skills: ["Industry 4.0", "IIoT", "IoT"],
      certificate: introductiontoindustry,
      type: "pdf",
    },
    {
      provider: "NPTEL",
      title: "Technical English for Engineers",
      desc: "Developed technical communication skills for engineering documentation, presentations, and professional communication.",
      skills: ["Communication", "Technical Writing", "Professional Skills"],
      certificate: technicalenglish,
      type: "image",
    },
    {
      provider: "Cisco",
      title: "Virtual Internship Program in Cybersecurity",
      desc: "Completed a virtual internship focused on cybersecurity concepts, network security, and real-world security practices.",
      skills: ["Cybersecurity", "Networking", "Threat Analysis"],
      certificate: ciscocybersecurity,
      type: "pdf",
    },
  ];

  return (
    <section id="certifications" className="px-6 md:px-16 py-24">
      <div className="section-tag">// certifications</div>

      <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold tracking-tight text-cream mb-4">
        Certifications & Continuous Learning
      </h2>

      <p className="text-base text-muted max-w-lg leading-relaxed mb-14">
        I enjoy continuously expanding my technical knowledge through
        certifications in data analytics, machine learning, big data, and
        cybersecurity.
      </p>

      <div className="grid md:grid-cols-2 gap-7">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-panel border border-border rounded-xl p-6 transition-all hover:border-teal hover:-translate-y-1"
          >
            <div className="font-jetbrains text-[0.65rem] text-gold tracking-wider uppercase mb-2">
              {cert.provider}
            </div>

            <h3 className="font-space-grotesk text-lg font-semibold text-cream mb-3">
              {cert.title}
            </h3>

            <p className="text-sm text-muted leading-relaxed mb-5">
              {cert.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-jetbrains text-[0.65rem] px-3 py-1 rounded-full border border-border text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>

            <button
              onClick={() => setSelectedCertificate(cert)}
              className="font-jetbrains text-[0.68rem] text-teal tracking-wide hover:underline"
            >
              → View Credential
            </button>
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative bg-white rounded-xl w-full max-w-6xl h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white shadow-lg text-2xl font-bold hover:bg-gray-100"
            >
              ×
            </button>

            {selectedCertificate.type === "pdf" ? (
              <iframe
                src={selectedCertificate.certificate}
                title={selectedCertificate.title}
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 p-6">
                <img
                  src={selectedCertificate.certificate}
                  alt={selectedCertificate.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
