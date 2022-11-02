import styled from '@emotion/styled';

export const ContactListContainer = styled.table`
  width: 100%;

  border: 1px solid #aaa;
  border-collapse: collapse;
  border-style: hidden;
  box-shadow: 0 0 0 1px #666;
  border-radius: 10px;
`;

export const Row = styled.tr`
  :nth-of-type(2n-1) {
    background-color: #eee;
  }
`;

export const Cell = styled.td`
  padding: 10px;

  :not(:last-of-type) {
    border-right: 1px solid #999;
  }

  :last-of-type {
    text-align: center;
  }
`;

export const HeaderRow = styled.tr`
  border-bottom: 1px solid #999;
`;

export const HeaderCell = styled.th`
  padding: 10px;

  :not(:last-of-type) {
    border-right: 1px solid #999;
  }
`;

export const RemoveButton = styled.button`
  padding: 10px;
  min-width: 75px;
  border: none;
  border-radius: 5px;

  background-color: #e77;
  color: #fff;
  cursor: pointer;

  transition: background-color 250ms ease-in-out;

  :hover {
    background-color: #e33;
  }
`;
