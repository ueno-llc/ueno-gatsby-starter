import * as React from 'react';

import s from './GridOverlay.scss';

const LOCAL_STORAGE_KEY_HORIZONTAL = '_devtoolsHorizontalGridVisible';
const LOCAL_STORAGE_KEY_VERTICAL = '_devtoolsVerticalGridVisible';

interface IProps {
  columns: number;
  baseline: number;
  button: boolean;
}

export const GridOverlay = (props: IProps) => {
  const gridOverlayRef: React.RefObject<HTMLDivElement> = React.useRef(null);
  const [isHorizontalVisible, setHorizontal] = React.useState<boolean>(false);
  const [isVerticalVisible, setVertical] = React.useState<boolean>(false);
  const { columns, baseline, button } = props;

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.keyCode === 76) {
      onToggleVertical();
    }
  };

  const onToggleHorizontal = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY_HORIZONTAL, String(!isHorizontalVisible));
    setHorizontal(!isHorizontalVisible);
  };

  const onToggleVertical = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY_VERTICAL, String(!isVerticalVisible));
    setVertical(!isVerticalVisible);
  };

  const setup = () => {
    const horizontalVisible = (localStorage.getItem(LOCAL_STORAGE_KEY_HORIZONTAL) === 'true');
    const verticalVisible = (localStorage.getItem(LOCAL_STORAGE_KEY_VERTICAL) === 'true');

    setHorizontal(horizontalVisible);
    setVertical(verticalVisible);

    if (gridOverlayRef.current) {
      gridOverlayRef.current.style.setProperty('--grid-column-count', String(columns));
      gridOverlayRef.current.style.setProperty('--grid-baseline', `${baseline}px`);
      gridOverlayRef.current.style.setProperty('--grid-baseline-calc', String(baseline));
    }
  };

  React.useEffect(() => {
    setup();
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  });

  return (
    <div
      ref={gridOverlayRef}
      className={s(s.grid, { isHorizontalVisible }, { isVerticalVisible })}
    >
      <div className={s.grid__container}>
        <div className={s.grid__row} data-columns={columns}>
          {Array(columns).fill(0).map((_, i) => (
            <div key={`grid_column_${i}`} className={s.grid__column}>
              <div className={s.grid__visualize} />
            </div>
          ))}
        </div>
      </div>

      {button ? (
        <>
          <button className={s(s.grid__button, { isVerticalVisible })} onClick={onToggleVertical}>
            <svg className={s.grid__button__svg} width="14px" height="14px" viewBox="0 0 14 14">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="2" height="14" />
                <rect x="4" y="0" width="2" height="14" />
                <rect x="8" y="0" width="2" height="14" />
                <rect x="12" y="0" width="2" height="14" />
              </g>
            </svg>
          </button>

          <button className={s(s.grid__button, { isHorizontalVisible })} onClick={onToggleHorizontal}>
            <svg className={s.grid__button__svg} width="14px" height="14px" viewBox="0 0 14 14">
              <g
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                transform="translate(7.000000, 7.000000) rotate(-270.000000) translate(-7.000000, -7.000000)"
              >
                <rect x="0" y="0" width="2" height="14" />
                <rect x="4" y="0" width="2" height="14" />
                <rect x="8" y="0" width="2" height="14" />
                <rect x="12" y="0" width="2" height="14" />
              </g>
            </svg>
          </button>
        </>
      ) : null}
    </div>
  );
};

GridOverlay.defaultProps = {
  columns: 12,
  baseline: 16,
  button: false,
};
