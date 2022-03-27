import styled from 'styled-components';

export default function Button({ title, color, onClick }) {
  return <Btn onClick={onClick} color={color}>{title}</Btn>;
}

Button.defaultProps = {
  title: 'Submit',
};

const Btn = styled.button`
  display: inline-block;
  background: ${props => props.color || '#000'};
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;

  &:focus {
    outline: none;
  }
  
  &:active {
    transform: scale(0.98);
  }

`;
