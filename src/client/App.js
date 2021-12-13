import React, { useEffect } from "react";
import styled from "styled-components";
import Table from "./Table";
import { SERVER_URL } from "./constant";

const Wrapper = styled.div`
  text-align: center;
  margin-top: 100px;
`;

const NameDiv = styled.div`
  color: Black;
  font-size: 30px;
`;

const App = () => {
  const [events, setEvents] = React.useState([]);

  useEffect(() => {
    fetch(`${SERVER_URL}/events`)
      .then((data) => data.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <Wrapper>
      <NameDiv>Web Events</NameDiv>
      {events.length > 0 ? <Table events={events} /> : <h1>Loading...</h1>}
    </Wrapper>
  );
};

export default App;
