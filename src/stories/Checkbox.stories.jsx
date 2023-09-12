import CheckboxComponent from '@/components/fields/Checkbox';

const meta = {
    component: CheckboxComponent,
};

export default meta;

const CheckboxArgs = {
  type: 'checkbox',
  name: 'terms',
  rules: 'accepted',
  label: 'I agree to the terms and conditions.'
};

export const Checkbox = { args: {
    label: CheckboxArgs.label,
} };


