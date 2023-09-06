import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { loginAPI } from "../api";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { log } from "../store/store";
import Swal from "sweetalert2";

function Login() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [login, setLogin] = useRecoilState(log);

  const idInput = useRef();
  const pwdInput = useRef();

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(login);
  // }, [login]);

  const loginHandler = async (e) => {
    e.preventDefault();
    if (!id) {
      alert("ID를 입력하세요");
      idInput.current.focus();
      return;
    }
    if (!pwd) {
      alert("Password를 입력하세요");
      pwdInput.current.focus();
      return;
    }

    const flag = await loginAPI("http://43.201.75.68:4000", {
      id,
      pwd,
    });

    if (flag) {
      Swal.fire({
        icon: "success",
        title: "Login Success!",
        showConfirmButton: false,
        timer: 1000,
      }).then(() => {
        setLogin(true);
        navigate("/info");
      });
    } else
      Swal.fire({
        icon: "error",
        title: "Login Fail...",
      });
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      <FormContainer>
        <Input
          ref={idInput}
          placeholder="ID"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <Input
          ref={pwdInput}
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
        <ButtonContainer>
          <Button onClick={loginHandler}>Login</Button>
          <Button
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </Button>
        </ButtonContainer>
      </FormContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  min-height: 93.5vh;
  min-width: 100vw;

  background-color: antiquewhite;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
`;

const FormContainer = styled.form`
  padding: 3rem;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  border: 1px solid black;
  border-radius: 15px;

  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const ButtonContainer = styled.div`
  margin-top: 0.3rem;
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

const Input = styled.input`
  padding: 0.4rem;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  border: 1px solid black;

  text-align: left;

  &:focus {
    padding: 0.6rem;
  }

  transition: 0.2s;
`;

const Button = styled.button`
  background-color: gray;
  color: white;
  padding: 0.7rem;

  border: 1px solid black;
  border-radius: 15px;
  text-align: left;

  &:hover {
    background-color: violet;
  }

  transition: 0.2s;
`;
