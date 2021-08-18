import React, { useState, useEffect } from "react";
import { HeaderBrowseContainer } from "../containers/header-browse";
import { Loading } from "../components";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import { useAuth } from "../contexts/AuthContext";

const Browse = () => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const twitterUsername = JSON.parse(localStorage.getItem("twitterUsername"));

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <>
      {loading ? <Loading /> : <Loading.ReleaseBody />}
      <HeaderBrowseContainer />
      <Form>
        <Form.Title>
          Witamy{" "}
          {currentUser.email === null
            ? "@" + twitterUsername
            : currentUser.displayName}
        </Form.Title>
      </Form>
      <FooterContainer />
    </>
  );
};

export default Browse;
