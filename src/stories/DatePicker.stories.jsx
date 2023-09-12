import DatePickerControl from '@/components/fields/DatePickerControl';

const meta = {
    component: DatePickerControl,
    title: 'Date Picker',
};

export default meta;
//
const DatePickerArgs = {
    name: 'schedule',
    rules: 'required',
    label: 'Book a date (renders component when kwesforms is initialized)',
    help: '* Required field',
};
  

export const DateTimePicker = { 
    args: {
        label: DatePickerArgs.label,
        rules: DatePickerArgs.rules,
        help: DatePickerArgs.help,
    },
    // name: 'Checkbox Group'
};
