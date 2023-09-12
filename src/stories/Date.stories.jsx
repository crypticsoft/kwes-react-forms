import DateControl from '@/components/fields/DateControl';

const meta = {
    component: DateControl,
    title: 'Date',
};

export default meta;
//
const DateControlComponentArgs = {
    name: 'schedule_date',
    rules: 'required',
    label: 'Book a date:',
    help: '* Required field',
};

export const DateTimePicker = { 
    args: {
        label: DateControlComponentArgs.label,
        rules: DateControlComponentArgs.rules,
        help: DateControlComponentArgs.help,
    },
    // name: 'Checkbox Group'
};
