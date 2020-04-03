import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { responsiveFont } from 'styles/utils';
import { variables, breakpoints } from 'styles/variables';
import { Container } from 'components/container/Container';
import { Column } from 'components/grid/Column';
import { Row } from 'components/grid/Row';

interface IntroProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  padding: 60px 0;

  border-bottom: 1px solid #e5e5e5;

  @media (min-width: ${breakpoints.md}) {
    padding: 120px 0;
  }
`;

const Paragraph = styled.p`
  ${responsiveFont(26, 32)};

  font-family: ${variables.font.familyHeading};
  font-weight: 300;
`;

export const Intro = ({ children }: IntroProps) => (
  <Container>
    <Wrapper>
      <Row>
        <Column md={7}>
          <Paragraph>{children}</Paragraph>
        </Column>
      </Row>
    </Wrapper>
  </Container>
);
