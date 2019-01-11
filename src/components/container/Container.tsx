import React from 'react';

import s from './Container.scss';

interface IContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: IContainerProps) => (
  <section className={s.container}>
    {children}
  </section>
);
