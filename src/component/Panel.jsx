import React from "react";
import classNames from "classnames";

const Panel = ({ children, className, ...rest }) => {
  const finalClassNames = classNames("border rounded shadow", className);

  return <div {...rest} className={finalClassNames}></div>;
};

export default Panel;
