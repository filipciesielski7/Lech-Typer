import React, { useEffect } from "react";
import { HeaderBrowseContainer } from "../containers/header-browse";
import FooterContainer from "../containers/footer";
import { Loading } from "../components";
import Form from "../components/form";
import { useAuth } from "../contexts/AuthContext";

const UpdateProfile = () => {
  //   const history = useHistory();
  const {
    // currentUser,
    loadingBrowse,
    setLoadingBrowse,
  } = useAuth();
  //   const twitterUsername = JSON.parse(localStorage.getItem("twitterUsername"));

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
        <Form.Title>Ranking</Form.Title>
      </Form>
      <FooterContainer />
    </>
  );
};

export default UpdateProfile;
