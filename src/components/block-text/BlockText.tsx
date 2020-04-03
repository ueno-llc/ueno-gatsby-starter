import React, { ReactNode } from 'react';

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';

import s from './BlockText.scss';

interface BlockTextProps {
  heading: string;
  description: ReactNode;
}

export const BlockText = ({ heading, description }: BlockTextProps) => (
  <Container>
    <div className={s.block}>
      <Row>
        <div className={s.block__col}>
          <h3 className={s.block__heading}>{heading}</h3>
          <p className={s.block__description}>{description}</p>
        </div>
      </Row>
    </div>
  </Container>
);
