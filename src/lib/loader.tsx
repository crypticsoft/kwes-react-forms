import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'
import kwesforms from 'kwesforms';

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

// check for forms on the page and mount them using a promise
function mountForms(): Promise<void> {
  return new Promise((resolve, reject) => {
    const allForms = document.querySelectorAll('[data-form-id]');

    if (allForms.length > 0) {
      // mount each form instance on the page
      allForms.forEach((form) => {
        ReactDOM.createRoot(form).render(
          <StrictMode>
            <App
              formId={form.getAttribute('data-form-id') || ''}
              location={form.getAttribute('data-location') || ''}
              presets={form.getAttribute('data-presets') || ''}
            />
          </StrictMode>,
        );
      });

      resolve();
    } else {
      reject(new Error('No forms found on the page.'));
    }
  });
}

if (isBrowser()) {
  document.addEventListener('DOMContentLoaded', () => {
    // after mounting all forms, initialize kwesforms
    mountForms().then(() => {
      console.log('✨ all forms have been mounted 🧙🏼 ✨');

      // slight delay to allow for forms to be mounted and rendered before initializing kwesforms
      setTimeout(() => {
        kwesforms.init();
        console.log('🧙🏼 kwesforms initialized 🧙🏼');
      }, 500);
    });
  });
}
