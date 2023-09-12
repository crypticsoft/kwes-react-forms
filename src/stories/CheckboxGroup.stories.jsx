import CheckboxGroupControl from '@/components/fields/CheckboxGroupControl';

const meta = {
    component: CheckboxGroupControl,
};

export default meta;
//

const CheckboxGroupArgs = {
    type: 'checkboxGroup',
    name: 'terms',
    rules: 'accepted',
    label: 'Pick a favorite fruit:',
    help: '* Required field',
    options: { Apple: 'Apple', Banana: 'Banana', Grape: 'Grape' }
};

export const CheckboxGroup = { 
    args: {
        label: CheckboxGroupArgs.label,
        options: CheckboxGroupArgs.options,
        help: CheckboxGroupArgs.help,
    },
    // name: 'Checkbox Group'
};
