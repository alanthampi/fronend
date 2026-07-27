import React from "react";
import resumePDF from "../assets/ALAN THAMPI GEORGE RESUEME.pdf";

const Contact = () => {
  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/alanthampigeorge/",
    },
    {
      name: "GitHub",
      url: "https://github.com/alanthampi",
    },
    {
      name: "Kaggle",
      url: "https://www.kaggle.com/urk21cs7043",
    },
    {
      name: "Resume PDF",
      url: resumePDF,
    },
  ];

  return (
    <section id="contact" className="px-6 md:px-16 py-24 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="section-tag flex justify-center">// let's talk</div>
        <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold tracking-tight text-cream mb-4">
          Open to the right opportunity
        </h2>
        <p className="text-base text-muted leading-relaxed max-w-lg mx-auto">
          Whether you need a full-time analyst, a project collaborator, or a
          second opinion on your data strategy — I'm happy to chat.
        </p>

        <a
          href="mailto:a4alan85@gmail.com"
          className="font-space-grotesk text-xl md:text-2xl font-semibold text-teal no-underline inline-block my-8 hover:underline"
        >
          a4alan85@gmail.com
        </a>

        <div className="flex flex-wrap justify-center gap-5">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-jetbrains text-xs px-5 py-2.5 border border-border text-muted no-underline rounded transition-all hover:border-teal hover:text-teal"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
