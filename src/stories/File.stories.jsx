import FileControl from '@/components/fields/FileControl';

const meta = {
    component: FileControl,
    title: 'File',
};

export default meta;
//
const FileControlComponentArgs = {
    name: 'resume',
    rules: 'required',
    label: 'Upload a file',
    help: '* Required field',
  };
  
export const DateTimePicker = { 
    args: {
        label: FileControlComponentArgs.label,
        rules: FileControlComponentArgs.rules,
        help: FileControlComponentArgs.help,
    },
    // name: 'Checkbox Group'
};
