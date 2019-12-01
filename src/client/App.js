import React, { useEffect, useState } from "react";
import ReactImage from "./logo.png";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  margin-top: 100px;
`;

const NameDiv = styled.div`
  color: #21c6ec;
  font-size: 30px;
`;
const PXImage = styled.img`
  width: 600px;
  height: 170px;
`;

const App = () => {
  const [user, setUser] = useState("");
  useEffect(async () => {
    const userNameJSON = await fetch("/api/getUsername");
    const userName = await userNameJSON.json();
    setUser(userName.username);
  }, []);
  return (
    <Wrapper>
      <NameDiv>{user ? `Hello ${user}` : "Loading.. please wait!"}</NameDiv>
      <PXImage src={ReactImage} alt="react" />
    </Wrapper>
  );
};

export default App;
