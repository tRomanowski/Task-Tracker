import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Header({ title }) {
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <Button color='green' title='Add' onClick={onClick}></Button>
    </StyledHeader>
  );

  function onClick() {
    console.log('Click');
  }
}

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string,
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
