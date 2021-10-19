import React, { useEffect, useState } from "react";
import { HeaderBrowseContainer } from "../containers/header-browse";
import FooterContainer from "../containers/footer";
import { Loading, Schedule, Game } from "../components";
import { useAuth } from "../contexts/AuthContext";
import { BsArrowLeft } from "react-icons/bs";
import * as ROUTES from "../constants/routes";

const SchedulePage = () => {
  const { loadingBrowse, loadData, gamesList } = useAuth();
  const [active, setActive] = useState("Ekstraklasa");

  useEffect(() => {
    loadData();
    setActive("Ekstraklasa");
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
            {gamesList.map((game, index) => {
              if (index < 34 && active === "Ekstraklasa") {
                return (
                  <Game key={index} game={game} index={index} length={35} />
                );
              } else if (index >= 34 && active === "Puchar Polski") {
                return (
                  <Game key={index} game={game} index={index} length={1} />
                );
              } else {
                return null;
              }
            })}
          </Schedule.ListContainer>
        </Schedule>
      </div>
      <FooterContainer />
    </>
  );
};

export default SchedulePage;
