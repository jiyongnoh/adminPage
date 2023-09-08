import styled from "styled-components";

function User({ user }) {
  return (
    <UserContainer>
      <span>
        학번:{user.user_number} 이름:{user.user_name}
      </span>
    </UserContainer>
  );
}

export default User;

const UserContainer = styled.main`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border: 1px solid black;
`;
