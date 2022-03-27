import styled, { css } from 'styled-components';

export default function Button({ title, color, onClick, btnBlock }) {
  return (
    <Btn onClick={onClick} color={color} btnBlock={btnBlock}>
      {title}
    </Btn>
  );
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
  ${props =>
    props.btnBlock
      ? css`
          display: block;
          width: 100%;
        `
      : ''}
  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.98);
  }
`;
