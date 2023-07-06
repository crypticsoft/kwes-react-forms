import * as React from 'react';
import { setDefaultValues } from '../helpers/setDefaultValues';

export default function useFormData({ formId, location, presets }: { formId?: string, location: string, presets?: string }) {
  const [formData, setFormData] = React.useState({});
  const [isLoading, setLoading] = React.useState(1);

  // todo: when a user updates the form state, save the fields to localStorage
  // when the visitor returns, it should check for the saved field data as "presets"  
  React.useEffect(() => {
    // Callback function to execute when mutations are observed
    async function getData() {
      try {
        const result = await fetch(location).then((response) => response.json());

        // build up a key:value object if we detect any preset values
        if (presets) {
          const presetJSON = JSON.parse(presets);
          const resultValues = setDefaultValues(result, presetJSON);
          setFormData(resultValues);
        }

        // no presets
        if (!presets) {
          // set the form data to state
          setFormData(result);
        }

        // save form data to localStorage
        // todo: check if localStorage is available and skip the fetch
        localStorage?.setItem(result.id, JSON.stringify(result));
        setLoading(0);
      } catch (error) {
        console.log(error.message);
        throw new Error(`Unable to fetch the form resource ${location}`, error.message);
      }
    }

    if (!formData?.id) getData();
  }, []);

  return { formId, formData, isLoading };
}
