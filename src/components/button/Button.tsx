import * as React from 'react';
import { Link } from 'gatsby';

import s from './Button.scss';

interface IButtonProps {
  to?: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const Button = (props: IButtonProps) => {
  const { to, children, className, disabled, secondary, block, ...rest } = props;
  const passProps = { ...rest };
  const isLink = (typeof to !== 'undefined');
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || '');

  passProps.className = s(s.button, className, { disabled, secondary, block });
  passProps.disabled = disabled;

  if (isExternal) {
    return <a target="_blank" rel="noopener noreferrer" href={to} {...passProps}>{children}</a>;
  }

  if (isLink) {
    return <Link to={to || '#'} {...passProps}>{children}</Link>;
  }

  return <button {...passProps}>{children}</button>;
};
