import React from "react";
import styled from "styled-components";
import { CheckBox } from "./CheckBoxContainer";
import FilterForm from "./FilterForm";
import Row from "./Row";

const RowDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr) repeat(2, 1fr);
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  border: 2px solid black;
  margin-top: 5px;
`;

const Table = ({ events }) => {
  const [filteredEvents, setFilteredEvents] = React.useState([]);

  React.useEffect(() => {
    setFilteredEvents(events);
  }, []);

  return (
    <>
      <FilterForm events={events} setFilteredEvents={setFilteredEvents} />
      <CheckBox events={events} setFilteredEvents={setFilteredEvents} />
      <RowDiv>
        {filteredEvents.map((event) => (
          <Row key={`${event.timestamp}_${event.ip}`} event={event} />
        ))}
      </RowDiv>
    </>
  );
};
export default Table;
