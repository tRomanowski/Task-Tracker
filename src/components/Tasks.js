import Task from "./Task"
import styled from "styled-components"

export default function Tasks({tasks, onDelete, onToggle}) {
 

  return (
    <StyledList>
        {tasks.map(task => {
            return (<li key={task.id}><Task onDelete={onDelete} onToggle={onToggle} task={task}/></li>)
        })}
    </StyledList>
  )
}

const StyledList = styled.ul`
    list-style: none;
`