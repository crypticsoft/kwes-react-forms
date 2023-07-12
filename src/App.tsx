import React, { Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import useFormData from './hooks/useFormData';
import ErrorFallback from '@/components/ErrorFallback.jsx';
import Loader from './Loader';

// base style
import './assets/css/index.scss';
// import './assets/css/frontend.scss';

const InitForm = ({ idx, resource }) => {    
  const Form = React.lazy(() => import('@/components/Form'));
  return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loader />}>
          <Form key={resource.id} id={idx} data={resource} />
        </Suspense>
      </ErrorBoundary>
    );
};

/*const checkStorage = (formId) => {
  if (formId) {
    // check for localStorage: this only works if the form ID is included on the resource URL
    const jsonData = localStorage?.getItem(formId);
    const parsedData = JSON.parse(jsonData);
    // if we have data in localStorage, return it (done!)
    if (jsonData) {
      return { id: parsedData.id, ...parsedData };
    }
  }
  return null;
}*/

interface AppProps {
  formId?: string;
  location: string;
  presets?: string;
}

const App: React.FC<AppProps> = ({ formId, location, presets }) => {
  const { formData } = useFormData({ formId, location, presets });

  return <InitForm idx={formId} resource={formData} />;
};

export default App;
