import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

interface ILinkProps {
  children: React.ReactNode;
  to: string;
  [key: string]: any;
}

export const Link = ({ children, to, ...props }: ILinkProps) => (
  <GatsbyLink to={to} {...props}>
    {children}
  </GatsbyLink>
);
