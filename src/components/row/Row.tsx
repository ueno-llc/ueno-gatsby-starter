import React, { ReactNode } from 'react';

import s from './Row.scss';

interface RowProps {
  children: ReactNode;
}

export const Row = ({ children }: RowProps) => <div className={s.row}>{children}</div>;
