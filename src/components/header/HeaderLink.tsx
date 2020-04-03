import React, { ReactNode } from 'react';

import { Link } from 'components/link/Link';

import s from './HeaderLink.scss';

interface HeaderLinkProps {
  name: string;
  to: string;
  icon?: ReactNode;
}

export const HeaderLink = ({ name, to, icon }: HeaderLinkProps) => {
  const isLink = typeof to !== 'undefined';
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || '');

  const content = () => (
    <>
      {icon && React.cloneElement(icon as any, { className: s.link__icon })}
      {name}
    </>
  );

  if (isExternal) {
    return (
      <a className={s.link} target="_blank" rel="noopener noreferrer" href={to}>
        {content()}
      </a>
    );
  }

  return (
    <Link className={s.link} to={to}>
      {content()}
    </Link>
  );
};
