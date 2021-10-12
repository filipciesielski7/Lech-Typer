import React, { useEffect } from "react";
import { HeaderBrowseContainer } from "../containers/header-browse";
import { Loading, Flexbox } from "../components";
import FooterContainer from "../containers/footer";
import { PredictionContainer } from "../containers/prediction";
import { RankingContainer } from "../containers/ranking";
import { OverviewContainer } from "../containers/overview";
import { useAuth } from "../contexts/AuthContext";

const Browse = () => {
  const {
    currentUser,
    loadingBrowse,
    setLoadingBrowse,
    loadingFirstBrowse,
    setLoadingFirstBrowse,
    db,
    getUsersList,
    setUsersList,
    getGamesList,
    gamesList,
    usersList,
  } = useAuth();
  const twitterUsername = JSON.parse(localStorage.getItem("twitterUsername"));
  const isTwitterUser = currentUser.email === null;

  useEffect(() => {
    getUsersList(
      currentUser.uid,
      isTwitterUser ? "@" + twitterUsername : currentUser.displayName,
      JSON.parse(localStorage.getItem("twitterProfileImage")),
      true
    );
    const interval = setInterval(function () {
      if (
        typeof usersList[0] === "object" &&
        typeof gamesList[0] === "object"
      ) {
        setLoadingBrowse(false);
        clearInterval(interval);
      }
    }, 500);
    setTimeout(() => {
      setLoadingFirstBrowse(false);
    }, 100);
  }, [
    setLoadingBrowse,
    setLoadingFirstBrowse,
    currentUser.displayName,
    currentUser.uid,
    db,
    isTwitterUser,
    twitterUsername,
    setUsersList,
    getUsersList,
    getGamesList,
    gamesList,
    usersList,
  ]);

  return (
    <>
      {loadingBrowse || loadingFirstBrowse ? (
        <Loading />
      ) : (
        <Loading.ReleaseBody />
      )}
      <HeaderBrowseContainer />
      <Flexbox>
        <Flexbox.Column>
          <PredictionContainer />
          <RankingContainer></RankingContainer>
        </Flexbox.Column>
        <Flexbox.Column>
          <OverviewContainer />
        </Flexbox.Column>
      </Flexbox>
      <FooterContainer />
    </>
  );
};

export default Browse;
