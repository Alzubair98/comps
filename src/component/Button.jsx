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
    "bg-gray-900 broder-gray-900 text-white": secondary,
    "bg-green-500 broder-green-500 text-white": success,
    "bg-yellow-400 broder-yellow-400 text-white": warning,
    "bg-red-500 broder-red-500 text-white": danger,
    // rounded
    "rounded-full": rounded,
    "bg-white outline-8": outline,
    // outline
    "text-blue-500": outline && primary,
    "text-red-500": outline && danger,
    "text-gray-900": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-500": outline && warning,
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
