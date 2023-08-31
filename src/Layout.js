import Header from "./component/Header";
import styled from "styled-components";
function Layout() {
  return (
    <MainContainer>
      <Header />
    </MainContainer>
  );
}

const MainContainer = styled.main`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid red;
`;

export default Layout;
