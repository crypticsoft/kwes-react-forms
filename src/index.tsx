import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const el = document.getElementById('app');

if (el) {
  ReactDOM.createRoot(el).render(
    <React.StrictMode>
      <App
        formId={el.getAttribute('data-form-id')}
        location={el.getAttribute('data-location')}
        presets={el.getAttribute('data-presets')}
      />
    </React.StrictMode>,
  )
}

