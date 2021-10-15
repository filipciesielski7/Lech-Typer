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
    getUsersList,
    loadData,
  } = useAuth();

  useEffect(() => {
    const twitterUsername = JSON.parse(localStorage.getItem("twitterUsername"));
    const isTwitterUser = currentUser.email === null;
    getUsersList(
      currentUser.uid,
      isTwitterUser ? "@" + twitterUsername : currentUser.displayName,
      JSON.parse(localStorage.getItem("twitterProfileImage")),
      true
    );
    loadData();
    setTimeout(() => {
      setLoadingFirstBrowse(false);
    }, 100);
  }, [
    setLoadingBrowse,
    setLoadingFirstBrowse,
    currentUser.displayName,
    currentUser.uid,
    currentUser.email,
    getUsersList,
    loadData,
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
