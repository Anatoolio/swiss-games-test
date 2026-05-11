import React from "react";
import { ReactComponent as GroupLogoSvg } from "../img/GroupLogo.svg";
import { ReactComponent as CartSvg } from "../img/cart.svg";
import { ReactComponent as CartHoverSvg } from "../img/cart_hover.svg";
import { ReactComponent as RocketSvg } from "../img/rocket.svg";

const withForwardRef = (Component) =>
  React.forwardRef((props, ref) => <Component ref={ref} {...props} />);

export const GroupLogoIcon = withForwardRef(GroupLogoSvg);
export const CartIcon = withForwardRef(CartSvg);
export const CartHoverIcon = withForwardRef(CartHoverSvg);
export const RocketIcon = withForwardRef(RocketSvg);
