import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'
import kwesforms from 'kwesforms';

(() => {

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
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.defer = true;
    script.src = "https://kwesforms.com/v2/kwes-script.js";

    document.getElementsByTagName('head')[0].appendChild(script);

    // after mounting all forms, initialize kwesforms
    mountForms().then(() => {
      console.log('✨ all forms have been mounted 🧙🏼 ✨');
    }).finally(() => {
      console.log('🧙🏼 kwesforms initialized 🧙🏼');

      /** 
         * Initialize Kwesforms:
            - With a slight delay to allow for forms to be mounted and rendered before initializing kwesforms
            - Alternatively, this can be deferred and loaded using a script tag in the <head> of the page. (see CDN vs NPM loading)
        **/
        // setTimeout(() => {
          // kwesforms.init();
        // }, 1000);
    });
  });
}

})()
