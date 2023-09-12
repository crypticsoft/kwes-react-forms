import NumberControl from '@/components/fields/NumberControl';

const meta = {
    component: NumberControl,
    title: 'Number',
};

export default meta;
//
const NumControlComponentArgs = {
    name: 'num_selection',
    rules: 'required',
    label: 'Select a number please',
    help: 'Enter a number between 0 and 100',
    min: 0,
    max: 100,
    defaultValue: 25,
};
    
export const NumControl = { 
    args: {
        label: NumControlComponentArgs.label,
        rules: NumControlComponentArgs.rules,
        help: NumControlComponentArgs.help,
        min: NumControlComponentArgs.min,
        max: NumControlComponentArgs.max,
        defaultValue: NumControlComponentArgs.defaultValue,
    },
    // name: 'Checkbox Group'
};
