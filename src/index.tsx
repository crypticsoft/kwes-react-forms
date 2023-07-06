import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const el = document.getElementById('app');
if (el) {
  ReactDOM.render(
    <App
      idx={el.getAttribute('data-form-id')}
      location={el.getAttribute('data-location')}
      presets={el.getAttribute('data-presets')}
    />,
    el
  );
}

