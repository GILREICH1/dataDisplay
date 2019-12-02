import React from "react";
import ReactImage from "./logo.png";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  margin-top: 100px;
`;

const NameDiv = styled.div`
  color: Black;
  font-size: 30px;
`;
const PXImage = styled.img`
  width: 600px;
  height: 170px;
`;

const App = () => {
  return (
    <Wrapper>
      <NameDiv>{`Hello Candidate`}</NameDiv>
      <PXImage src={ReactImage} alt="react" />
    </Wrapper>
  );
};

export default App;
