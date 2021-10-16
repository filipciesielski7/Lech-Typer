import React, { useEffect } from "react";
import { HeaderBrowseContainer } from "../containers/header-browse";
import FooterContainer from "../containers/footer";
import { Loading, Schedule } from "../components";
import { useAuth } from "../contexts/AuthContext";
import { BsArrowLeft } from "react-icons/bs";
import * as ROUTES from "../constants/routes";

const SchedulePage = () => {
  const { loadingBrowse, loadData, getGamesList } = useAuth();

  useEffect(() => {
    loadData();
  }, [loadData]);

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
        <Schedule>
          <Schedule.TitleBar>
            <Schedule.Title>Terminarz</Schedule.Title>
            <Schedule.SubTitle to={ROUTES.BROWSE}>
              <BsArrowLeft
                style={{
                  marginRight: "5px",
                }}
              />
              Powrót
            </Schedule.SubTitle>
          </Schedule.TitleBar>
          <Schedule.ListContainer>
            {getGamesList().map((element, index) => {
              //return element.home_team;
              return true;
            })}
          </Schedule.ListContainer>
        </Schedule>
      </div>
      <FooterContainer />
    </>
  );
};

export default SchedulePage;
