import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { dupleCheckAPI, signupAPI } from "../api";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(0);
  // const [email, setEmail] = useState("");
  const [vrNum, setVrNum] = useState("");

  const [duple, setDuple] = useState(false);
  const [checkMsg, setCheckMsg] = useState("");

  const idInput = useRef();
  const pwdInput = useRef();
  const vrInput = useRef();

  const navigate = useNavigate();

  const checkHandler = async (e) => {
    e.preventDefault();

    const type = e.target.name === "id" ? "id" : "vr";

    if (type === "id" && !id) {
      alert(`ID를 입력하세요`);
      idInput.current.focus();
      return;
    }

    if (type === "vr" && !vrNum) {
      alert(`VR Number를 입력하세요`);
      idInput.current.focus();
      return;
    }

    const flag = await dupleCheckAPI("http://localhost:4000", {
      id,
      type,
      vrNum,
    });

    if (flag) {
      alert(`사용 가능한 ${type === "id" ? "ID" : "VR Number"} 입니다`);
      setDuple(true);
      setCheckMsg("");
    } else {
      alert(`중복된 ${type === "id" ? "ID" : "VR Number"} 입니다`);
      idInput.current.focus();
      setCheckMsg("사용 불가");
      setDuple(false);
    }
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    if (!id) {
      alert("ID를 입력하세요");
      idInput.current.focus();
      return;
    }

    if (!duple && checkMsg === "사용 불가") {
      alert("중복된 ID 입니다");
      idInput.current.focus();
      return;
    } else if (!duple) {
      alert("중복 검사를 해주세요");
      idInput.current.focus();
      return;
    }

    if (!pwd) {
      alert("Password를 입력하세요");
      idInput.current.focus();
      return;
    }

    if (!vrNum) {
      alert("VR Number를 입력하세요");
      vrInput.current.focus();
      return;
    }

    const flag = await signupAPI("http://localhost:4000", {
      id,
      pwd,
      // name,
      // age,
      // email,
      vrNum,
    });

    if (flag) {
      alert("회원가입 성공!");
      navigate("/login");
    } else {
      alert("회원가입 실패!");
    }
  };

  //   useEffect(() => {
  //     console.log(id);
  //   }, [id]);

  return (
    <SignUpContainer>
      <h1>Sign Up</h1>
      <FormContainer>
        {/* <InputContainer>
          <h3>개인 정보</h3>
          <Input
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            placeholder="Age"
            type="number"
            min="0"
            max="150"
            onChange={(e) => {
              if (e.target.value > 150) {
                alert("150 초과의 숫자는 입력할 수 없습니다");
                e.target.value = 0;
                setAge(0);
              }
              setAge(e.target.value);
            }}
          />
          <Input
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </InputContainer> */}
        <InputContainer>
          <h3>*계정 정보</h3>
          <IdContainer>
            <Input
              ref={idInput}
              placeholder="ID"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <CheckButton name="id" onClick={checkHandler}>
              중복 확인
            </CheckButton>
          </IdContainer>
          <Input
            ref={pwdInput}
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
          <IdContainer>
            <Input
              ref={vrInput}
              placeholder="VR Number"
              onChange={(e) => {
                setVrNum(e.target.value);
              }}
            />
            <CheckButton name="vr" onClick={checkHandler}>
              중복 확인
            </CheckButton>
            <a
              href="https://www.meta.com/ko-kr/help/orders-and-returns/articles/find-serial-number/"
              target="_blank"
              rel="noreferrer"
            >
              VR 번호란?
            </a>
            <MsgSpan>{checkMsg}</MsgSpan>
          </IdContainer>
        </InputContainer>
        <ButtonContainer>
          <Button onClick={signupHandler}>Sign Up</Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            Cancel
          </Button>
        </ButtonContainer>
      </FormContainer>
    </SignUpContainer>
  );
}

export default SignUp;

const SignUpContainer = styled.div`
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
  gap: 0.5rem;

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

const InputContainer = styled.div`
  margin-top: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

const IdContainer = styled.div`
  margin-top: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

const Input = styled.input`
  padding: 0.4rem;
  min-width: 12rem;

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

const CheckButton = styled.button`
  padding: 0.3rem;
  background-color: gray;
  color: white;

  border: 1px solid black;
  border-radius: 10px;
  text-align: left;

  &:hover {
    background-color: violet;
  }

  transition: 0.2s;
`;

const MsgSpan = styled.span`
  color: red;
  font-weight: bold;
`;
