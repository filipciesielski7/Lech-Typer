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
    db,
    getUsersList,
    setUsersList,
    getGamesList,
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
    setTimeout(() => {
      setLoadingBrowse(false);
    }, 800);
  }, [
    setLoadingBrowse,
    currentUser.displayName,
    currentUser.uid,
    db,
    isTwitterUser,
    twitterUsername,
    setUsersList,
    getUsersList,
    getGamesList,
  ]);

  return (
    <>
      {loadingBrowse ? <Loading /> : <Loading.ReleaseBody />}
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
