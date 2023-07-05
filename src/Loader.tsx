import React from 'react';
import ContentLoader from 'react-content-loader';
// import useElementOnScreen from './hooks/useElementObserver';

const Loader = (props) => {
  // const [ containerRef, isVisible ] = useElementOnScreen({
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 1.0
  // });

  return (
    <div style={{ width: '430px', height: '505px' }}>
      <ContentLoader
        height={505}
        width={430}
        viewBox="0 0 430 505"
        backgroundColor="#d9d9d9"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect
          width="92.726"
          height="21.398"
          rx="0"
          ry="0"
          transform="translate(32.877 31.456)"
          fill="#F5F5F5"
        />
        <rect
          width="43"
          height="27.39"
          rx="0"
          ry="0"
          transform="matrix(1 0 0 .58416 32.877 180)"
          fill="#F5F5F5"
        />
        <rect
          width="43"
          height="50.5"
          rx="0"
          ry="0"
          transform="matrix(5.25281 0 0 .41243 32.877 60.557)"
          fill="#F5F5F5"
        />
        <rect
          width="52.353"
          height="50.5"
          rx="0"
          ry="0"
          transform="matrix(5.25281 0 0 .41243 32.877 347.057)"
          fill="#F5F5F5"
        />
        <rect
          width="61.872"
          height="50.5"
          rx="0"
          ry="0"
          transform="matrix(5.25281 0 0 .78908 32.877 380.152)"
          fill="#F5F5F5"
        />
        <rect
          width="72"
          height="16"
          rx="0"
          ry="0"
          transform="translate(32.877 98.028)"
          fill="#F5F5F5"
        />
        <rect
          width="72"
          height="16"
          rx="0"
          ry="0"
          transform="translate(227.217 98.028)"
          fill="#F5F5F5"
        />
        <rect
          width="72"
          height="16"
          rx="0"
          ry="0"
          transform="translate(227.217 263.46)"
          fill="#F5F5F5"
        />
        <rect
          width="72"
          height="16"
          rx="0"
          ry="0"
          transform="translate(32.877 263.46)"
          fill="#F5F5F5"
        />
        <rect
          width="43"
          height="41.649"
          rx="0"
          ry="0"
          transform="matrix(3.99128 0 0 .9604 32.877 121.5)"
          fill="#F5F5F5"
        />
        <rect
          width="42.233"
          height="41.649"
          rx="0"
          ry="0"
          transform="matrix(8.64245 0 0 .9604 32.877 205)"
          fill="#F5F5F5"
        />
        <rect
          width="43"
          height="41.649"
          rx="0"
          ry="0"
          transform="matrix(3.99128 0 0 .9604 227.217 121.5)"
          fill="#F5F5F5"
        />
        <rect
          width="43"
          height="41.649"
          rx="0"
          ry="0"
          transform="matrix(3.99128 0 0 .9604 227.217 289.12)"
          fill="#F5F5F5"
        />
        <rect
          width="43"
          height="41.649"
          rx="0"
          ry="0"
          transform="matrix(3.99128 0 0 .9604 32.877 289.12)"
          fill="#F5F5F5"
        />
        <rect
          width="18.791"
          height="37.485"
          rx="0"
          ry="0"
          transform="matrix(3.99128 0 0 .9604 32.877 437)"
          fill="#F5F5F5"
        />
      </ContentLoader>
    </div>
  );
};

export default Loader;
