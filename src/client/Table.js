import React from "react";
import styled from "styled-components";
import Row from "./Row";

const RowDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr) repeat(2, 1fr);
  grid-column-gap: 4px;
  grid-row-gap: 4px;
`;

const Table = ({ events }) => {
  return (
    <RowDiv>
      {events.map((event) => (
        <Row key={`${event.timestamp}_${event.ip}`} event={event} />
      ))}
    </RowDiv>
  );
};
export default Table;
