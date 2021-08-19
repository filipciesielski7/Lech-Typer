import React, { useEffect } from "react";
import { HeaderBrowseContainer } from "../containers/header-browse";
import { Loading } from "../components";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
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
      <Form>
        <Form.Title>
          Witamy{" "}
          {currentUser.email === null
            ? "@" + twitterUsername
            : currentUser.displayName}
          , strona główna
        </Form.Title>
      </Form>
      <FooterContainer />
    </>
  );
};

export default Browse;
