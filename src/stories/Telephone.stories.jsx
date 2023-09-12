import TelephoneControl from '@/components/fields/TelephoneControl';

const meta = {
    component: TelephoneControl,
    title: 'Telepohone',
};

export default meta;
//
const TelControlComponentArgs = {
    name: 'phone_number',
    rules: 'required',
    label: 'Enter your main phone number here so we can spam it non-stop like a robot does',
    help: 'Format: 123-456-7890',
    pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
    placeholder: '123-456-7890',
};

export const Telephone = { 
    args: {
        label: TelControlComponentArgs.label,
        rules: TelControlComponentArgs.rules,
        help: TelControlComponentArgs.help,
        pattern: TelControlComponentArgs.pattern,
        placeholder: TelControlComponentArgs.placeholder,
    },
    // name: 'Checkbox Group'
};
