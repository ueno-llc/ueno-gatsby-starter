import React, { ReactNode } from 'react';

import { Link } from 'components/link/Link';

import StarterLogo from 'assets/svg/starter-logo.svg';

import s from './Header.scss';

interface HeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
  <header className={s.header}>
    <div className={s.header__container}>
      <div className={s.header__content}>
        <Link to="/" className={s.header__logo}>
          <StarterLogo className={s.header__logoSvg} />
        </Link>

        <div className={s.header__navigation}>{children}</div>
      </div>
    </div>
  </header>
);
