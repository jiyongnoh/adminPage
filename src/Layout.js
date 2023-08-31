import styled from "styled-components";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <MainContainer>
      <Header />
      <Outlet />
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
