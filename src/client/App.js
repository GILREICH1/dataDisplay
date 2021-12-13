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
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    fetch(`${SERVER_URL}/events`)
      .then((data) => data.json())
      .then((data) => {
        setEvents(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <Wrapper>
      <Title>Web Events</Title>
      {isLoading ? <h3>Loading...</h3> : <Table events={events} />}
    </Wrapper>
  );
};

export default App;
