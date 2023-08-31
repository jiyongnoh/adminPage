import styled from "styled-components";

function Info() {
  return (
    <MainContainer>
      <h1>Info Page</h1>
    </MainContainer>
  );
}

export default Info;

const MainContainer = styled.main`
  min-height: 93.5vh;
  min-width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid black;
`;
