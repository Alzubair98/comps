import React from "react";
import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

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
