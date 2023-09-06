import styled from "styled-components";

function Main() {
  return (
    <MainContainer>
      <h1>Main Page</h1>
      <h1>Soyes Tips</h1>
      <h1>Administor</h1>
      <h1>Page</h1>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.main`
  min-height: 93.5vh;
  min-width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid black;
`;
