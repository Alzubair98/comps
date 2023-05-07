import React, { useContext } from "react";
import NavigationContext from "../context/navigation";

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);
  return (
    <a
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey) {
          return;
        }
        e.preventDefault();
        navigate(to);
      }}
      href={to}
    >
      {children}
    </a>
  );
};

export default Link;
