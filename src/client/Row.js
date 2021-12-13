import React from "react";
import styled from "styled-components";

const Cell = styled.span`
  font-size: 15px;
  padding: 5px;
  border: 2px solid black;
`;

const Row = ({ event }) => {
  return (
    <>
      <Cell>{event.domain}</Cell>
      <Cell>{event.ip}</Cell>
      <Cell>{event.timestamp}</Cell>
      <Cell>{`${event.blacklisted}`}</Cell>
      <Cell>{event.event_type}</Cell>
    </>
  );
};

export default Row;
