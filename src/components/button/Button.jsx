import React from "react";
import "./button.scss";
import PropTypes from "prop-types";
const Button = (props) => {
  return (
    <div
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </div>
  );
};
export const OutlineButton = (props) => {
  return (
    <Button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </Button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
};
export default Button;
