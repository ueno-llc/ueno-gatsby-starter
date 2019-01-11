import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { Header } from 'components/header/Header';
import { Devtools } from 'components/devtools/Devtools';

import 'styles/fonts.scss';

import s from './AppLayout.scss';

interface IProps {
  children: React.ReactNode;
}

export default ({ children }: IProps) => {
  const renderLayout = (data: any) => {
    const { title } = data.site.siteMetadata;

    return (
      <div className={s.layout}>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <Header />

        {children}

        <Devtools />
      </div>
    );
  };

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={renderLayout}
    />
  );
};
