import React from "react";
import className from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  const classes = className("px-3 py-1.5 border", {
    "bg-blue-500 broder-blue-500 text-white": primary,
    "bg-red-500 broder-red-500 text-white": danger,
  });

  return <button className={classes}>{children}</button>;
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "only one of primary, secondary, success, warning, danger, can be true "
      );
    }
  },
};
export default Button;
