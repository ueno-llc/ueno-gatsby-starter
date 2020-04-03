import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { responsiveFont } from 'styles/utils';
import { breakpoints, variables } from 'styles/variables';
import { Container } from 'components/container/Container';
import { Column } from 'components/grid/Column';
import { Row } from 'components/grid/Row';

interface BlockTextProps {
  heading: string;
  description: ReactNode;
}

const Block = styled.div`
  padding: 60px 0;

  @media (min-width: ${breakpoints.lg}) {
    padding: 180px 0;
  }
`;

const Heading = styled.h3`
  ${responsiveFont(16, 18)}

  margin-bottom: 10px;

  font-family: ${variables.font.familyHeading};
`;

const Description = styled.p`
  ${responsiveFont(16, 18)}

  font-weight: 300;
  line-height: ${26 / 16};

  a {
    text-decoration: none;
    font-weight: 400;

    color: #000;
    transition: 200ms opacity ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }
`;

export const BlockText = ({ heading, description }: BlockTextProps) => (
  <Container>
    <Block>
      <Row>
        <Column md={5}>
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </Column>
      </Row>
    </Block>
  </Container>
);
