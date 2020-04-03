import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Styles } from 'styles/base';
import { Helmet } from 'react-helmet';

import Dribbble from 'assets/svg/dribbble.svg';
import Facebook from 'assets/svg/facebook.svg';
import Github from 'assets/svg/github.svg';
import Instagram from 'assets/svg/instagram.svg';
import Linkedin from 'assets/svg/linkedin.svg';
import Twitter from 'assets/svg/twitter.svg';
import Logo from 'assets/svg/ueno-logo.svg';

import { Footer } from 'components/footer/Footer';
import { Header } from 'components/header/Header';
import { HeaderLink } from 'components/header/HeaderLink';
import { Devtools } from 'components/devtools/Devtools';

interface AppLayoutProps {
  children: ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

const Layout = styled.div`
  display: block;

  min-height: 100vh;
`;

export default ({ children }: AppLayoutProps) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto:wght@300;400&display=swap"
        rel="stylesheet"
      />
    </Helmet>

    <Styles />

    <Layout>
      <Header>
        <HeaderLink name="about" href="/about" />
        <HeaderLink name="github" href="https://github.com/ueno-llc" icon={<Github />} />
      </Header>

      {children}

      <Footer
        logo={<Logo />}
        social={[
          { icon: <Dribbble />, to: 'https://dribbble.com/ueno' },
          { icon: <Twitter />, to: 'https://twitter.com/uenodotco' },
          { icon: <Github />, to: 'https://github.com/ueno-llc' },
          { icon: <Instagram />, to: 'https://www.instagram.com/uenodotco' },
          { icon: <Facebook />, to: 'https://www.facebook.com/uenodotco' },
          { icon: <Linkedin />, to: 'https://www.linkedin.com/company/ueno' },
        ]}
      />

      {isDev && <Devtools />}
    </Layout>
  </>
);
