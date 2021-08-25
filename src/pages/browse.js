import React, { useEffect, useCallback } from "react";
import { HeaderBrowseContainer } from "../containers/header-browse";
import { Loading, Flexbox } from "../components";
import FooterContainer from "../containers/footer";
import { PredictionContainer } from "../containers/prediction";
import { RankingContainer } from "../containers/ranking";
import { OverviewContainer } from "../containers/overview";
import { useAuth } from "../contexts/AuthContext";

const Browse = () => {
  const { currentUser, loadingBrowse, setLoadingBrowse, db } = useAuth();
  const twitterUsername = JSON.parse(localStorage.getItem("twitterUsername"));
  const isTwitterUser = currentUser.email === null;

  const addUserToRealtimeDatabase = useCallback(async () => {
    const users = db.ref("users");
    await users
      .child(`${currentUser.uid}`)
      .once("value")
      .then((snapshot) => {
        if (snapshot.exists() && snapshot.val().user_name !== "null") {
          return null;
        } else {
          db.ref(`users/${currentUser.uid}`).set({
            user_id: `${currentUser.uid}`,
            user_name: `${
              isTwitterUser ? "@" + twitterUsername : currentUser.displayName
            }`,
            points: 0,
          });
        }
      });
  }, [
    currentUser.uid,
    isTwitterUser,
    twitterUsername,
    db,
    currentUser.displayName,
  ]);

  useEffect(() => {
    addUserToRealtimeDatabase();
    setTimeout(() => {
      setLoadingBrowse(false);
    }, 800);
  }, [setLoadingBrowse, addUserToRealtimeDatabase]);

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
