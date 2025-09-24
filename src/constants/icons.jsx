import React from 'react';
import { ReactComponent as GroupLogoSvg } from '../img/GroupLogo.svg';
import { ReactComponent as LogoSvg } from '../img/LOGO.svg';
import { ReactComponent as BinSvg } from '../img/bin.svg';
import { ReactComponent as BinHoverSvg } from '../img/bin_hover.svg';
import { ReactComponent as RocketSvg } from '../img/rocket.svg';

const withForwardRef = (Component) =>
    React.forwardRef((props, ref) => <Component ref={ref} {...props} />);

export const GroupLogoIcon = withForwardRef(GroupLogoSvg);
export const LogoIcon = withForwardRef(LogoSvg);
export const BinIcon = withForwardRef(BinSvg);
export const BinHoverIcon = withForwardRef(BinHoverSvg);
export const RocketIcon = withForwardRef(RocketSvg);
