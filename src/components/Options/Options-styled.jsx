import styled from 'styled-components';

export const OptionsList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  & + & {
    margin-left: 15px;
  }
`;

export const Button = styled.button`
  padding: 5px, 10px;
  min-width: 90px;
  height: 30px;
  cursor: pointer;
  border-radius: 5px;
  text-transform: uppercase;
  color: white;
  background-color: #8400ff;
  :hover,
  :focus {
    color: #0b96e6;
    background-color: white;
  }
`;