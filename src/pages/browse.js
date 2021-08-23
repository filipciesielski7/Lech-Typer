import React, { useEffect } from "react";
import { HeaderBrowseContainer } from "../containers/header-browse";
import { Loading, Flexbox } from "../components";
import FooterContainer from "../containers/footer";
import { PredictionContainer } from "../containers/prediction";
import { RankingContainer } from "../containers/ranking";
import { OverviewContainer } from "../containers/overview";
import { useAuth } from "../contexts/AuthContext";

const Browse = () => {
  const { currentUser, loadingBrowse, setLoadingBrowse } = useAuth();
  const twitterUsername = JSON.parse(localStorage.getItem("twitterUsername"));

  useEffect(() => {
    setTimeout(() => {
      setLoadingBrowse(false);
    }, 800);
  }, [setLoadingBrowse]);

  return (
    <>
      {loadingBrowse ? <Loading /> : <Loading.ReleaseBody />}
      <HeaderBrowseContainer />
      <Flexbox>
        <Flexbox.Column>
          <PredictionContainer />
          <RankingContainer />
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
