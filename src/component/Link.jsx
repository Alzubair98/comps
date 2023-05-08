import React from "react";
import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

const Link = ({ to, children }) => {
  const { navigate } = useNavigation();

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
