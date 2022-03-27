import Task from "./Task"
import styled from "styled-components"

export default function Tasks({tasks}) {
 

  return (
    <StyledList>
        {tasks.map(task => {
            return (<li key={task.id}><Task task={task}/></li>)
        })}
    </StyledList>
  )
}

const StyledList = styled.ul`
    list-style: none;
`