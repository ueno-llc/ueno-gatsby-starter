import * as React from 'react';

import { GridOverlay } from './GridOverlay';
import { GsapTools } from './GsapTools';

const LOCAL_STORAGE_KEY_VISIBLE = '_devtoolsVisible';

export const Devtools = () => {
  // const [visible, setVisible] = React.useState(localStorage.getItem(LOCAL_STORAGE_KEY_VISIBLE) === 'true');
  const [visible, setVisible] = React.useState(false);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.keyCode === 75) {
      onToggleDisplay();
    }
  };

  const onToggleDisplay = () => {
    setVisible(!visible);
    localStorage.setItem(LOCAL_STORAGE_KEY_VISIBLE, String(!visible));
  };

  React.useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false);

    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  });

  if (!visible && process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <>
      <GridOverlay button={visible} columns={12} />
      <GsapTools button={visible} />
    </>
  );
};
