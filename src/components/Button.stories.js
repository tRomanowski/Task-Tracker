import Button from './Button.js';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    onSubmit: 'onSubmit',
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Add',
};
