import React, { useContext } from "react";
import NavigationContext from "../context/navigation";
import classNames from "classnames";

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);

  const classes = classNames("text-blue-500");

  return (
    <a
      className={classes}
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
