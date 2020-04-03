import React, { ReactNode } from 'react';

import { Container } from 'components/container/Container';

import s from './Segment.scss';

interface SegmentProps {
  children: ReactNode;
  container?: boolean;
}

export const Segment = (props: SegmentProps) => {
  const { children, container } = props;
  const content = container ? <Container>{children}</Container> : children;

  return <section className={s.segment}>{content}</section>;
};

Segment.defaultProps = {
  container: true,
};
