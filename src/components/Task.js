import styled from "styled-components"
import {FaTimes} from 'react-icons/fa';

export default function Task({task, onDelete, onToggle}) {
  return (
    <TaskCard onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text} <FaTimes onClick={() => onDelete(task.id)} style={{ color: 'red', cursor:'pointer'}}/></h3>
        <p>{task.day}</p>
    </TaskCard>
  )
}

const TaskCard = styled.section`
background: #f4f4f4;
margin: 5px;
padding: 10px 20px;
/*cursor: pointer;*/

h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
`