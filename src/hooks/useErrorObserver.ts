import * as React from 'react';

export default function useErrorObserver(controlRef) {
  const [error, setErrorState] = React.useState(false);

  React.useEffect(() => {
    // Callback function to execute when mutations are observed
    const callback = function (mutationsList) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes') {
          if (mutation.target.classList.contains('kw-border-error')) {
            setErrorState(true);
          }
          if (mutation.target.classList.contains('kw-border-success')) {
            setErrorState(false);
          }
        }
      }
    };

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: false, subtree: false };

    // Start observing the target node for configured mutations
    const observer = new MutationObserver(callback);
    if (controlRef.current) observer.observe(controlRef.current, config);

    // cleanup: remove observer
    return () => {
      observer.disconnect();
    };
  });

  return error;
}
