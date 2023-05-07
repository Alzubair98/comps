import React from "react";

const Link = ({ to, children }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        console.log("user navigating to:", to);
      }}
      href={to}
    >
      {children}
    </a>
  );
};

export default Link;
