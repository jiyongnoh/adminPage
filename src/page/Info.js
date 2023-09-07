import { useEffect, useState } from "react";
import styled from "styled-components";
import { infoAPI } from "../api";
import User from "../component/User";
import { useRecoilState } from "recoil";
import { vrNum } from "../store/store";
function Info() {
  const [users, setUsers] = useState([]);
  const [vrNumber, setVrNumber] = useRecoilState(vrNum);

  useEffect(() => {
    if (vrNumber) {
      infoAPI("http://localhost:4000", { vrNum: vrNumber }).then((data) => {
        if (data) setUsers([...data]);
      });
    }
  }, []);

  return (
    <MainContainer>
      <h1>Info Page</h1>
      <UserContainer>
        {users.length
          ? users.map((user) => {
              return <User user={user} />;
            })
          : "조회 가능한 학생이 없습니다"}
      </UserContainer>
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

const UserContainer = styled.main`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border: 1px solid black;
`;
