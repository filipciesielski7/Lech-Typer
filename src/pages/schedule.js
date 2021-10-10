import React, { useEffect } from "react";
import { HeaderBrowseContainer } from "../containers/header-browse";
import FooterContainer from "../containers/footer";
import { Loading, Ranking2 as Ranking } from "../components";
import { useAuth } from "../contexts/AuthContext";
import { BsArrowLeft } from "react-icons/bs";
import * as ROUTES from "../constants/routes";

const Schedule = () => {
  const { loadingBrowse, setLoadingBrowse } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      setLoadingBrowse(false);
    }, 800);
  }, [setLoadingBrowse]);

  return (
    <>
      {loadingBrowse ? <Loading /> : <Loading.ReleaseBody />}
      <HeaderBrowseContainer />
      <div
        style={{
          maxWidth: "1164px",
          margin: "0 auto",
        }}
      >
        <Ranking>
          <Ranking.TitleBar>
            <Ranking.Title>Terminarz</Ranking.Title>
            <Ranking.SubTitle to={ROUTES.BROWSE}>
              <BsArrowLeft
                style={{
                  marginRight: "5px",
                }}
              />
              Powrót
            </Ranking.SubTitle>
          </Ranking.TitleBar>
        </Ranking>
      </div>
      <FooterContainer />
    </>
  );
};

export default Schedule;
