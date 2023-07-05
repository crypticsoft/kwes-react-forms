/**
 * Caution: Consider this file when using react-scripts
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const el = document.getElementById('app');
if (el) {
  ReactDOM.render(
    <App
      location={el.getAttribute('data-location')}
      presets={el.getAttribute('data-presets')}
    />,
    el
  );
}

