import React from "react";
import Link from "./Link";

const Sidebar = () => {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "buttons", path: "/buttons" },
  ];
  return (
    <div className="sticky top-0  flex flex-col">
      {links.map((link) => {
        return (
          <Link key={link.label} to={link.path}>
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
