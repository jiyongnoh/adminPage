import styled from "styled-components";
import { Link } from "react-router-dom";
function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderElement>Main</HeaderElement>
      </Link>
      <Link to="/login">
        <HeaderElement>Login</HeaderElement>
      </Link>
      <Link to="/info">
        <HeaderElement>Info</HeaderElement>
      </Link>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  min-width: 100vw;
  min-height: 3rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  border: 1px solid blue;
`;

const HeaderElement = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid orange;
`;
