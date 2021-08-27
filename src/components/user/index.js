import React from "react";
import {
  Container,
  Username,
  Points,
  Position,
  ProfileImage,
  ProfileImageContainer,
} from "./styles/user";

const User = ({ user, photoURL }) => {
  const { user_name, points } = user;

  return (
    <Container>
      <Position>
        <p>1.</p>
      </Position>
      <Username>
        <p>{user_name}</p>
      </Username>
      <Points>
        <p>{points}</p>
      </Points>

      {photoURL ? (
        <ProfileImageContainer>
          <ProfileImage src={photoURL} alt={user_name}></ProfileImage>
        </ProfileImageContainer>
      ) : null}
    </Container>
  );
};

export default User;
