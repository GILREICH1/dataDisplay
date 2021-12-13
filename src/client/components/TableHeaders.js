import React from "react";
import styled from "styled-components";

const Cell = styled.span`
  font-size: 15px;
  font-weight: bold;
  padding: 5px;
`;

const TableHeaders = ({ headers }) => {
  return (
    <>
      {/* TODO dynamic headers */}
      <Cell>{headers[2].toUpperCase()}</Cell>
      <Cell>{headers[0].toUpperCase()}</Cell>
      <Cell>{headers[1].toUpperCase()}</Cell>
      <Cell>{headers[3].toUpperCase()}</Cell>
      <Cell>{headers[4].toUpperCase()}</Cell>
    </>
  );
};

export default TableHeaders;
