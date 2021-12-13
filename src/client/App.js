import React, { useEffect } from "react";
import styled from "styled-components";
import Table from "./Table";
import { SERVER_URL } from "./constant";

const Wrapper = styled.div`
  text-align: center;
  margin-top: 100px;
`;

const Title = styled.h1`
  color: Black;
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
      <Title>Web Events</Title>
      {events.length > 0 ? <Table events={events} /> : <h3>Loading...</h3>}
    </Wrapper>
  );
};

export default App;
