import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if (!text) {
      alert('Please add a task!');
      return;
    }

    onAddTask({ text, day, reminder });

    setDay('');
    setText('');
    setReminder(false);
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <FormControl>
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <label>Day and Time</label>
        <input
          type="text"
          placeholder="Add Day and Time"
          value={day}
          onChange={e => setDay(e.target.value)}
        />
      </FormControl>
      <FormControlCheck>
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={e => setReminder(e.currentTarget.checked)}
        />
      </FormControlCheck>

      <Button btnBlock={true} />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin-bottom: 40px;
`;

const FormControl = styled.div`
  margin: 20px 0;

  label {
    display: block;
  }

  input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
  }
`;

const FormControlCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;

  label {
    flex: 1;
  }

  input {
    flex: 2;
    height: 20px;
  }
`;
