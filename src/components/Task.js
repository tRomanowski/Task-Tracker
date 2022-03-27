import styled from "styled-components"

export default function Task({task}) {
  return (
    <TaskCard>
        <h3>{task.text}</h3>
        <p>{task.day}</p>
    </TaskCard>
  )
}

const TaskCard = styled.section`
background: #f4f4f4;
margin: 5px;
padding: 10px 20px;
cursor: pointer;

h3 {
    display:f flex;
    align-items: center;
    justify-content: space-between;
}
`