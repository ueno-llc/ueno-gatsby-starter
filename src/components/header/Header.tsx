import React, { ReactNode } from 'react';
import styled from 'styled-components';

import StarterLogo from 'assets/svg/starter-logo.svg';

import { breakpoints, variables } from 'styles/variables';
import { Container } from 'components/container/Container';

interface HeaderProps {
  children: ReactNode;
}

const HeaderRoot = styled.header`
  display: block;
`;

const Content = styled.div`
  display: flex;
  align-items: center;

  padding: ${variables.gutter} 0;
`;

const Logo = styled(StarterLogo)`
  display: block;

  height: 16px;
  width: auto;

  @media (min-width: ${breakpoints.md}) {
    height: 18px;
  }
`;

const Navigation = styled.div`
  display: flex;
  margin-left: auto;
`;

export const Header = ({ children }: HeaderProps) => (
  <HeaderRoot>
    <Container>
      <Content>
        <a href="/">
          <Logo />
        </a>
        <Navigation>{children}</Navigation>
      </Content>
    </Container>
  </HeaderRoot>
);
