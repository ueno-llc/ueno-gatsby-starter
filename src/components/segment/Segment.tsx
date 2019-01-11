import * as React from 'react';

import { Container } from 'components/container/Container';

import s from './Segment.scss';

interface ISegmentProps {
  children: React.ReactNode;
  container?: boolean;
}

export const Segment = (props: ISegmentProps) => {
  const { children, container } = props;
  const content = container ? <Container>{children}</Container> : children;

  return (
    <section className={s.segment}>
      {content}
    </section>
  );
};

Segment.defaultProps = {
  container: true,
};
