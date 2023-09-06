import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { log } from "../store/store";
import { useNavigate } from "react-router-dom";

function Header() {
  const [login, setLogin] = useRecoilState(log);
  const navigate = useNavigate();
  return (
    <>
      {login ? (
        <HeaderContainer>
          <Link to="/">
            <HeaderElement>Main</HeaderElement>
          </Link>
          <HeaderElement
            onClick={() => {
              setLogin(false);
              navigate("/");
            }}
          >
            로그아웃
          </HeaderElement>
          <Link to="/info">
            <HeaderElement>Info</HeaderElement>
          </Link>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <Link to="/">
            <HeaderElement>Main</HeaderElement>
          </Link>
          <Link to="/login">
            <HeaderElement>Login</HeaderElement>
          </Link>
          <Link to="/signup">
            <HeaderElement>Sign Up</HeaderElement>
          </Link>
        </HeaderContainer>
      )}
    </>
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

const HeaderElement = styled.button`
  padding: 1rem;
  border: 1px solid orange;
  cursor: pointer;
`;
