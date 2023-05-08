import React from "react";
import Link from "./Link";

const Sidebar = () => {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "buttons", path: "/buttons" },
  ];
  return (
    <>
      {links.map((link) => {
        return <Link to={link.path}>{link.label}</Link>;
      })}
    </>
  );
};

export default Sidebar;
