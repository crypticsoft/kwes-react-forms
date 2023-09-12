import InputControl from '@/components/fields/InputControl';

const meta = {
    component: InputControl,
    title: 'Input',
};

export default meta;
//

const InputArgs = {
    type: 'text',
    name: 'favorite',
    rules: 'accepted',
    label: 'Tells us your favorite fruit:',
    help: '* Required field'
};

export const Input = { 
    args: {
        label: InputArgs.label,
        rules: InputArgs.rules,
        help: InputArgs.help,
        name: InputArgs.name,
    },
    // name: 'Checkbox Group'
};
