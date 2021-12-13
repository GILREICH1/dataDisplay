import React from "react";
import styled from "styled-components";
import Row from "./Row";

const RowDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr) repeat(2, 1fr);
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  border: 2px solid black;
`;

const onlyBlacklisted = (events) => events.filter((event) => event.blacklisted);

const Table = ({ events }) => {
  const [blackListFilter, setBlackListFilter] = React.useState(false);
  const [filteredEvents, setFilteredEvents] = React.useState([]);

  React.useEffect(() => {
    if (blackListFilter) {
      setFilteredEvents(onlyBlacklisted(events));
    } else {
      setFilteredEvents(events);
    }
  }, [blackListFilter]);

  return (
    <>
      <label>
        <input
          type="checkbox"
          onChange={(e) => {
            console.log(blackListFilter);
            setBlackListFilter(e.target.checked);
          }}
          checked={!!blackListFilter}
        />
        <span>Show Only BlackListed</span>
      </label>
      <RowDiv>
        {filteredEvents.map((event) => (
          <Row key={`${event.timestamp}_${event.ip}`} event={event} />
        ))}
      </RowDiv>
    </>
  );
};
export default Table;
