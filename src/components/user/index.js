import React from "react";
import {
  Container,
  Username,
  Points,
  Position,
  ProfileImage,
  ProfileImageContainer,
} from "./styles/user";

const User = ({ index, currentUserRanking, length, user, photoURL }) => {
  const { user_name, points, position } = user;

  return (
    <Container
      index={index}
      length={length}
      currentUserRanking={currentUserRanking}
    >
      <Position position={position}>
        <p>{position ? `${position}.` : "0."}</p>
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
