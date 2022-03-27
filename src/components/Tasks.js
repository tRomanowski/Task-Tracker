import Task from "./Task"
import styled from "styled-components"

export default function Tasks({tasks, onDelete}) {
 

  return (
    <StyledList>
        {tasks.map(task => {
            return (<li key={task.id}><Task onDelete={onDelete} task={task}/></li>)
        })}
    </StyledList>
  )
}

const StyledList = styled.ul`
    list-style: none;
`