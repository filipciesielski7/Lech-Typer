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
    db,
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

    const addBetsContainersToRealtimeDatabase = () => {
      const bets = db.ref("bets");
      bets
        .child(`${currentUser.uid}`)
        .once("value")
        .then((snapshot) => {
          if (snapshot.exists() && snapshot.val().exists !== null) {
            return;
          } else {
            db.ref(`bets/${currentUser.uid}`).set({
              exists: true,
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
              6: "",
              7: "",
              8: "",
              9: "",
              10: "",
              11: "",
              12: "",
              13: "",
              14: "",
              15: "",
              16: "",
              17: "",
              18: "",
              19: "",
              20: "",
              21: "",
              22: "",
              23: "",
              24: "",
              25: "",
              26: "",
              27: "",
              28: "",
              29: "",
              30: "",
              31: "",
              32: "",
              33: "",
              34: "",
              1116: "",
              1132: "",
              118: "",
              114: "",
              112: "",
              111: "",
            });
          }
        });
    };

    addBetsContainersToRealtimeDatabase();
  }, [
    setLoadingBrowse,
    setLoadingFirstBrowse,
    currentUser.displayName,
    currentUser.uid,
    currentUser.email,
    getUsersList,
    loadData,
    db,
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
