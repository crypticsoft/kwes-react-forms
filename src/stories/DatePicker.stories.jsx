import DatePickerControl from '@/components/fields/DatePickerControl';

//
const DatePickerArgs = {
    name: 'schedule',
    rules: 'required',
    label: 'Book a date (renders styled-component when kwesforms is initialized)',
    help: '* Required field',
};

const meta = {
    component: DatePickerControl,
    title: 'Date Picker',
};

export default meta;


export const DateTimePicker = { 
    args: {
        label: DatePickerArgs.label,
        rules: DatePickerArgs.rules,
        help: DatePickerArgs.help,
    },
    // name: 'Checkbox Group'
};
