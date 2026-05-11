import PropTypes from "prop-types";
import "./Button.scss";

export default function Button({
  children,
  variant = "primary",
  size = "lg",
  as: Tag = "button",
  type,
  className = "",
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();
  // Only forward `type` when rendering a real <button>.
  const buttonType = Tag === "button" ? type || "button" : undefined;
  return (
    <Tag className={classes} type={buttonType} {...rest}>
      {children}
    </Tag>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "outline", "link"]),
  size: PropTypes.oneOf(["lg", "sm"]),
  as: PropTypes.elementType,
  type: PropTypes.string,
  className: PropTypes.string,
};
