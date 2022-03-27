import Header from './components/Header';
import styled from 'styled-components';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'doctor apointment',
      day: 'Feb 5th at 02:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'meeting',
      day: 'Mar 2nd at 01:00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Birthday',
      day: ' Mar 22nd at 08:00pm',
      reminder: false,
    },
  ]);

  // DELETE FUNCTION

  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  // TOGGLE REMINDER FUNCTION

  function handleToggleReminder(id) {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  }

  return (
    <Container>
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={handleDelete}
          onToggle={handleToggleReminder}
        />
      ) : (
        'No tasks planned!'
      )}
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
`;
