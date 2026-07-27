import React from "react";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5 bg-navy/85 backdrop-blur-xl border-b border-border">
      <a
        href="#"
        className="font-space-grotesk font-bold text-lg tracking-wider text-teal no-underline"
      >
        AM_
      </a>

      <ul className="hidden md:flex gap-9 list-none">
        {["Skills", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="font-jetbrains text-xs text-muted tracking-widest uppercase transition-colors hover:text-teal no-underline"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="font-space-grotesk text-sm font-semibold px-5 py-2 border-2 border-teal text-teal rounded transition-all hover:bg-teal hover:text-navy no-underline"
      >
        Hire Me
      </a>
    </nav>
  );
};

export default Nav;
