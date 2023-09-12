import RadioGroupControl from '@/components/fields/RadioGroupControl';

const meta = {
    component: RadioGroupControl,
    title: 'Radio Group',
};

export default meta;
//

const RadioGroupArgs = {
    type: 'radioGroup',
    name: 'terms',
    rules: 'accepted',
    label: 'Pick a favorite fruit:',
    help: '* Required field',
    options: { Apple: 'Apple', Banana: 'Banana', Grape: 'Grape' }
};
  
export const RadioGroup = { 
    args: {
        label: RadioGroupArgs.label,
        rules: RadioGroupArgs.rules,
        help: RadioGroupArgs.help,
        options: RadioGroupArgs.options,
        name: RadioGroupArgs.name,
    },
    // name: 'Checkbox Group'
};
