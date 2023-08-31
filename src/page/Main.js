import styled from "styled-components";

function Main() {
  return (
    <MainContainer>
      <h1>Main Page</h1>
      <h2>Soyes Tips</h2>
      <h3>Administor</h3>
      <h4>Page</h4>
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
