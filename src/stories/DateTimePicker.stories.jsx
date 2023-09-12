import DateTimePickerControl from '@/components/fields/DateTimePickerControl';

const meta = {
    component: DateTimePickerControl,
    title: 'Date Time Picker',
};

export default meta;
//
const DateTimePickerArgs = {
    name: 'schedule',
    rules: 'required',
    label: 'Schedule a time:',
    help: '* Required field',
    min: '2023-07-12T00:00',
    max: '2023-12-31T00:00',
};


export const DateTimePicker = { 
    args: {
        label: DateTimePickerArgs.label,
        rules: DateTimePickerArgs.rules,
        help: DateTimePickerArgs.help,
        min: DateTimePickerArgs.min,
        max: DateTimePickerArgs.max,
    },
    // name: 'Checkbox Group'
};
