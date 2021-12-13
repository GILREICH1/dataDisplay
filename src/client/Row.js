import React from "react";
import styled from "styled-components";

const Cell1 = styled.span`
  font-size: 15px;
  padding: 5px;
  border-bottom: 2px solid black;
`;

const Cell = styled.span`
  font-size: 15px;
  padding: 5px;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
`;

const Row = ({ event }) => {
  return (
    <>
      <Cell1>{event.domain}</Cell1>
      <Cell>{event.ip}</Cell>
      <Cell>{event.timestamp}</Cell>
      <Cell>{`${event.blacklisted}`}</Cell>
      <Cell>{event.event_type}</Cell>
    </>
  );
};

export default Row;
