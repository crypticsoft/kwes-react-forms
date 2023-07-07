import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'

document.addEventListener('DOMContentLoaded', () => {
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
      )
    });
  }
});