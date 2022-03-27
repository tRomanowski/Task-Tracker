import Header from './Header.js';

export default {
  title: 'components/Header',
  component: Header,
  argTypes: {
    onSubmit: 'onSubmit',
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
};
