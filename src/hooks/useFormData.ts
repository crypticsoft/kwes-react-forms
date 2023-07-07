import * as React from 'react';
import { setDefaultValues } from '../helpers/setDefaultValues';

export default function useFormData({ formId, location, presets }: { formId?: string, location: string, presets?: string }) {
  const [formData, setFormData] = React.useState({});
  const [isLoading, setLoading] = React.useState(true);

  // todo: when a user updates the form state, save the fields to localStorage
  // when the visitor returns, it should check for the saved field data as "presets"  
  React.useEffect(() => {
    console.log('localtion', location);
    // Callback function to execute when mutations are observed
    async function getData() {
      try {
        const response = await fetch(location);
        const result = await response.json();

        if (presets) {
          const presetJSON = JSON.parse(presets);
          const resultValues = setDefaultValues(result, presetJSON);
          setFormData(resultValues);
        } else {
          setFormData(result);
        }

        localStorage?.setItem(result.id, JSON.stringify(result));
        setLoading(false);

      } catch (error) {
        console.log(error.message);
        throw new Error(`Unable to fetch the form resource ${location}`);
      }
    }

    if (isLoading) getData();
  }, [isLoading, location, presets]);

  return { formId, formData, isLoading };
}
