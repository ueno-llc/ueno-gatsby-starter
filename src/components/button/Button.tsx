import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import Link from 'next/link';

import { variables } from 'styles/variables';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?(): void;
}

const base = css`
  display: inline-flex;
  position: relative;

  padding: 0 ${variables.gutter};
  margin-right: ${variables.gutter};

  height: 40px;

  cursor: pointer;

  font-size: ${variables.font.size};
  text-align: center;
  text-decoration: none;
  line-height: 40px;
  vertical-align: middle;

  background-color: #000;
  color: #fff;

  transition: background-color 180ms ease;

  &:hover {
    background-color: ${lighten(0.25, '#000')};
  }
`;

const Lnk = styled.a`
  ${base}
`;

const Btn = styled.button`
  ${base};
`;

export const Button = ({ children, href, onClick }: ButtonProps) => {
  const isLink = typeof href !== 'undefined';
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(href || '');

  if (isExternal) {
    return (
      <Lnk href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </Lnk>
    );
  }

  if (isLink) {
    return (
      <Link href={href || '#'}>
        <Lnk>{children}</Lnk>
      </Link>
    );
  }

  return <Btn onClick={onClick}>{children}</Btn>;
};
