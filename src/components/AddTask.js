import styled from 'styled-components';
import Button from './Button';

export default function AddTask() {
  return (
    <StyledForm>
      <FormControl>
        <label>Task</label>
        <input type="text" placeholder="Add Task" />
      </FormControl>
      <FormControl>
        <label>Day and Time</label>
        <input type="text" placeholder="Add Day and Time" />
      </FormControl>
      <FormControlCheck>
        <label>Set Reminder</label>
        <input type="checkbox" />
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

  label {
    flex: 1;
  }

  input {
    flex: 2;
    height: 20px;
  }
`;
