import React from "react";
import Link from "./Link";

const Sidebar = () => {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "buttons", path: "/buttons" },
    { label: "modal", path: "/modal" },
    { label: "table", path: "/table" },
  ];
  return (
    <div className="sticky top-0 flex flex-col items-start">
      {links.map((link) => {
        return (
          <Link
            className="mb-3"
            activeClassName="font-bold border-l-4 border-blue-500 pl-2 "
            key={link.label}
            to={link.path}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
