import tasks from './tasks.js';

export default {
  title: 'components/tasks',
  component: tasks,
};

const Template = (args) => <tasks {...args} />;

export const Default = Template.bind({});
Default.args = {};
