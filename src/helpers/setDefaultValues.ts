/**
 * Set Default Options and Values
 * @param {array} fields
 * @param {array} presets
 */
export const setDefaultValues = (result, presets) => {
  const presetObj = {};
  const isSelectField = (field) => field.type === 'select';

  for (const fieldValue of presets) {
    presetObj[Object.keys(fieldValue)[0]] = Object.values(fieldValue)[0];
  }

  // loop through all of the fields | groups
  result.fields.map((field, index) => {
    // checks for field by `name`
    if (field?.name) {
      // has a preset value by field name
      if (presetObj[field.name]) {
        // INPUT: sets a defaultValue
        if (!isSelectField(result.fields[index])) {
          // sets the result field `defaultValue` value
          result.fields[index].defaultValue = presetObj[field.name];
        }

        // SELECT: sets a defaultOption
        if (isSelectField(result.fields[index])) {
          // sets the result field `defaultOption` for select fields
          result.fields[index].defaultOption = presetObj[field.name];
        }
        return false;
      }
    }
    // has a field group
    if (field?.group) {
      // loop through group
      field.group.map((fieldGroup, fieldGroupIndex) => {
        // has a field preset
        if (presetObj[fieldGroup.field.name]) {
          // INPUT: sets the defaultValue from the preset
          if (!isSelectField(result.fields[index].group[fieldGroupIndex].field)) {
            // set defaultValue
            result.fields[index].group[fieldGroupIndex].field.defaultValue =
              presetObj[fieldGroup.field.name];
          }

          // SELECT: sets the defaultOption from the preset
          if (isSelectField(result.fields[index].group[fieldGroupIndex].field)) {
            // set defaultOption
            result.fields[index].group[fieldGroupIndex].field.defaultOption =
              presetObj[fieldGroup.field.name];
          }
        }
        return false;
      });
    }
    return false;
  });

  return result;
};
