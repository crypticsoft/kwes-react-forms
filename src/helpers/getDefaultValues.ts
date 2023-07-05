export const getDefaultValues = (schema, presets) => {
  return schema.reduce((acc, val) => {
    let defaultValue;
    let defaultOption;

    switch (val.type) {
      case 'text':
      case 'textarea':
      case 'checboxGroup':
        defaultValue = '';
        break;
      case 'select':
        defaultOption = '';
        break;
      case 'checkbox':
        defaultValue = false;
        break;
      default:
        defaultValue = '';
    }

    return {
      ...acc,
      [val.name]:
        val.defaultValue || val.defaultOption || defaultValue || defaultOption
    };
  }, {});
};
