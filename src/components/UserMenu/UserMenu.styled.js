import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-right: 30px;
`;

export const Username = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  padding: 0;
  margin: 0;
  margin-right: 10px;
  span {
    color: teal;
  }
`;
