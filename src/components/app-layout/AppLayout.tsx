import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { get } from 'lodash';

import { Header } from 'components/header/Header';
import { Devtools } from 'components/devtools/Devtools';

import s from './AppLayout.scss';

interface IProps {
  children: React.ReactNode;
}

export default ({ children }: IProps) => {
  const options = {
    header: true,
    ...get(React.Children.toArray(children), '0.type.layoutOptions', {}),
  };

  const renderLayout = (data: any) => {
    const { title } = data.site.siteMetadata;

    return (
      <>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        {options.header && <Header title={title} />}

        <div className={s.layout}>
          {children}
        </div>

        <Devtools />
      </>
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
