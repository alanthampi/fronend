import { useEffect, useRef } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".skill-card, .project-card, .timeline-item, .stat",
    );

    targets.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetIndex = Array.from(targets).indexOf(entry.target);
            setTimeout(
              () => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
              },
              80 * (targetIndex % 4),
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation;
