import React from "react";

const Link = ({ to }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        console.log("user navigating to:", to);
      }}
      href={to}
    >
      Click
    </a>
  );
};

export default Link;
