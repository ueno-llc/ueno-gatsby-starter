import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

interface LinkProps {
  children: React.ReactNode;
  to: string;
  [key: string]: any;
}

export const Link = ({ children, to, ...props }: LinkProps) => (
  <GatsbyLink to={to} {...props}>
    {children}
  </GatsbyLink>
);
