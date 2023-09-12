import RangeControl from '@/components/fields/RangeControl';

const meta = {
    component: RangeControl,
    title: 'Range',
};

export default meta;
//
const RangeControlComponentArgs = {
    name: 'range_selection',
    rules: 'required',
    label: 'Range Selector',
    type: 'range',
    min: 20,
    max: 100,
    step: 20,
    help: 'Enter a number between the range of (0 and 100) at a step of 2',
    defaultValue: 60,
};
  
export const DateTimePicker = { 
    args: {
        label: RangeControlComponentArgs.label,
        rules: RangeControlComponentArgs.rules,
        help: RangeControlComponentArgs.help,
        min: RangeControlComponentArgs.min,
        max: RangeControlComponentArgs.max,
        defaultValue: RangeControlComponentArgs.defaultValue,
    },
    // name: 'Checkbox Group'
};
