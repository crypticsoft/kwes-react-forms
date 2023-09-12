import SelectControl from '@/components/fields/SelectControl';

const meta = {
    component: SelectControl,
    title: 'Select',
};

export default meta;
//

const SelectArgs = {
    type: 'select',
    name: 'terms',
    rules: 'accepted',
    label: 'Pick a favorite fruit:',
    help: '* Required field',
    options: { Apple: 'Apple', Banana: 'Banana', Grape: 'Grape' }
};
  

export const Select = { 
    args: {
        label: SelectArgs.label,
        rules: SelectArgs.rules,
        help: SelectArgs.help,
        options: SelectArgs.options,
        name: SelectArgs.name,
    },
    // name: 'Checkbox Group'
};
