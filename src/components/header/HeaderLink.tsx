import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import { breakpoints } from 'styles/variables';

interface LinkProps {
  name: string;
  href: string;
  icon?: ReactNode;
}

const base = css`
  display: flex;

  margin-left: 40px;

  text-decoration: none;

  color: #404040;
  transition: 200ms opacity ease-in-out;

  &:first-of-type {
    margin-left: 0;
  }

  &:hover {
    opacity: 0.5;
  }
`;

const LinkElement = styled.a`
  ${base};
`;

const Icon = styled.div`
  svg {
    position: relative;

    margin-right: 8px;

    path {
      fill: #404040;
    }

    @media (min-width: ${breakpoints.md}) {
      top: 3px;
    }
  }
`;

const Lnk = styled(Link)`
  ${base};
`;

export const HeaderLink = ({ name, href, icon }: LinkProps) => {
  const isLink = typeof href !== 'undefined';
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(href || '');

  if (isExternal) {
    return (
      <LinkElement href={href} target="_blank" rel={'noopener noreferrer'}>
        {icon && <Icon>{icon}</Icon>}
        {name}
      </LinkElement>
    );
  }

  return (
    <Lnk to={href}>
      {icon && <Icon>{icon}</Icon>}
      {name}
    </Lnk>
  );
};
