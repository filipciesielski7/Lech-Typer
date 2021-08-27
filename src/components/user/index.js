import React from "react";
import { Container, Username, Points, Position } from "./styles/user";

const User = ({ user, photoURL }) => {
  const { user_name, points } = user;

  return (
    <Container>
      <Position>
        <p>1.</p>
      </Position>
      {photoURL ? <img src={photoURL} alt="user" /> : null}
      <Username>
        <p>{user_name}</p>
      </Username>
      <Points>
        <p>{points}</p>
      </Points>
    </Container>
  );
};

export default User;
