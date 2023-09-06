import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { log } from "../store/store";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
              Swal.fire({
                title: "Do you want to LogOut?",
                showDenyButton: true,
                confirmButtonText: "Yes",
                denyButtonText: `No`,
              }).then((res) => {
                if (res.isConfirmed) {
                  Swal.fire({
                    icon: "success",
                    title: "LogOut!",
                    showConfirmButton: false,
                    timer: 1000,
                  }).then(() => {
                    setLogin(false);
                    navigate("/");
                  });
                }
              });
            }}
          >
            LogOut
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
