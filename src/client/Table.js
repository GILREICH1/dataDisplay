import React from "react";
import Row from "./Row";

const Table = ({ events }) => {
  return events.map((event) => (
    <Row key={`${event.timestamp}_${event.ip}`} event={event} />
  ));
};
export default Table;
