import styled from 'styled-components';

const Wrapper = styled.li`
  width: 100%;
  min-height: 5em;
  height: auto;
  display: flex;
  align-items: center;
  position: relative;
  border-top: 1px solid #eee;

  &:first-child {
    border-top: none;
  }
`;

export default Wrapper;
