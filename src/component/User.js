import styled from "styled-components";

function User({ user }) {
  return (
    <>
      <span>
        학번:{user.user_number} 이름:{user.user_name}
      </span>
    </>
  );
}

export default User;
