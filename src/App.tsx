/**
 * Caution: Consider this file when using react-scripts
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
// import { ErrorBoundary } from 'react-error-boundary';
import useFormData from './hooks/useFormData';
// import ErrorFallback from './components/ErrorFallback.jsx';
// import Loader from './Loader';
import Form from './components/Form';

// base style
import './assets/css/bulma.min.css';
import './assets/css/frontend.css';

// import './assets/css/index.css';

const InitForm = ({ resource }) => <Form id={resource.id} data={resource} />;

const App = (props) => {
  const { formData } = useFormData(props);
  return <InitForm resource={formData} />;
};

export default App;
