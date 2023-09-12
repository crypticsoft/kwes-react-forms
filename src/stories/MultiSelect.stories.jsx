import SelectControl from '@/components/fields/SelectControl';

const meta = {
    component: SelectControl,
    title: 'Multi-Select',
};

export default meta;
//
const MultiSelectArgs = {
    type: 'select',
    name: 'terms',
    multiple: true,
    size: 3,
    rules: 'accepted',
    label: 'Pick a favorite fruit:',
    help: '* Required field',
    defaultOption: { Banana: 'Banana' },
    options: { Apple: 'Apple', Banana: 'Banana', Grape: 'Grape', Orange: 'Orange', Pear: 'Pear', Pineapple: 'Pineapple', Strawberry: 'Strawberry' }
};

export const MultiSelect = { 
    args: {
        label: MultiSelectArgs.label,
        rules: MultiSelectArgs.rules,
        help: MultiSelectArgs.help,
        options: MultiSelectArgs.options,
        defaultOption: MultiSelectArgs.defaultOption,
        size: MultiSelectArgs.size,
        multiple: MultiSelectArgs.multiple,
    },
    // name: 'Checkbox Group'
};
