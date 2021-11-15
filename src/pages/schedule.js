import React, { useEffect, useState } from "react";
import { HeaderBrowseContainer } from "../containers/header-browse";
import FooterContainer from "../containers/footer";
import { Loading, Schedule, Game } from "../components";
import { useAuth } from "../contexts/AuthContext";
import { FaArrowDown, FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import * as ROUTES from "../constants/routes";

const SchedulePage = () => {
  const { loadingBrowse, loadData, gamesList, currentUserBetsList } = useAuth();
  const [active, setActive] = useState("Ekstraklasa");
  const [searchActive, setSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadData();
    setActive("Ekstraklasa");
  }, [loadData]);

  function newGamesList() {
    return gamesList.filter((element) => {
      if (element.home_team.toUpperCase().includes(searchTerm.toUpperCase())) {
        return true;
      } else if (
        element.away_team.toUpperCase().includes(searchTerm.toUpperCase())
      ) {
        return true;
      } else if (
        element.home_score
          .toString()
          .concat(":", element.away_score.toString())
          .includes(searchTerm.toUpperCase())
      ) {
        return true;
      } else if (
        element.away_score
          .toString()
          .concat(":", element.home_score.toString())
          .includes(searchTerm.toUpperCase())
      ) {
        return true;
      } else if (
        element.game_id
          .toString()
          .toUpperCase()
          .includes(searchTerm.toUpperCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
  }

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

          <Schedule.Bar>
            <Schedule.BarSection>
              {/* <Schedule.GameTypeImage src="https://www.lechpoznan.pl/files/cache/8/b/rth_0x21_8b03d1b7a07893f114138d23b080122d1564046049.png" /> */}
              <Schedule.Selection
                isSelected={active === "Ekstraklasa"}
                onClick={() => {
                  setActive("Ekstraklasa");
                }}
              >
                PKO Ekstraklasa{" "}
                {active === "Ekstraklasa" ? (
                  <FaArrowDown className="arrow" size="10px" />
                ) : null}
              </Schedule.Selection>
            </Schedule.BarSection>
            <Schedule.BarSection>
              {/* <Schedule.GameTypeImage src="https://www.lechpoznan.pl/files/cache/f/c/rth_0x21_fcd3cadd0a410f15a424de8d4ff12e5f1599822816.png" /> */}
              <Schedule.Selection
                isSelected={active === "Puchar Polski"}
                onClick={() => {
                  setActive("Puchar Polski");
                }}
              >
                Fortuna Puchar Polski{" "}
                {active === "Puchar Polski" ? (
                  <FaArrowDown className="arrow" size="10px" />
                ) : null}
              </Schedule.Selection>
            </Schedule.BarSection>

            <Schedule.BarSection search={true}>
              <Schedule.SearchContainer>
                <label htmlFor="game">
                  <Schedule.SearchIcon>
                    <FaSearch
                      size="18px"
                      onClick={() => setSearchActive(true)}
                    />
                  </Schedule.SearchIcon>
                </label>
                <Schedule.SearchBar
                  type="text"
                  id="game"
                  autoComplete="off"
                  placeholder="Drużyna, wynik, kolejka"
                  searchActive={searchActive}
                  onChange={(e) => setSearchTerm(e.target.value.toString())}
                  value={searchTerm}
                />
                <Schedule.SearchIcon searchActive={searchTerm === ""}>
                  <AiOutlineClose
                    size="18px"
                    onClick={() => setSearchTerm("")}
                  />
                </Schedule.SearchIcon>
              </Schedule.SearchContainer>
            </Schedule.BarSection>
          </Schedule.Bar>

          <Schedule.SearchSmallContainer small={true}>
            <label htmlFor="game2">
              <Schedule.SearchIcon>
                <FaSearch size="18px" onClick={() => setSearchActive(true)} />
              </Schedule.SearchIcon>
            </label>
            <Schedule.SearchBar
              type="text"
              id="game2"
              autoComplete="off"
              placeholder="Drużyna, wynik, data"
              small={true}
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <Schedule.SearchIcon searchActive={searchTerm === ""}>
              <AiOutlineClose size="18px" onClick={() => setSearchTerm("")} />
            </Schedule.SearchIcon>
          </Schedule.SearchSmallContainer>

          <Schedule.ListContainer>
            {newGamesList().map((game, index) => {
              if (active === "Ekstraklasa" && game.type === "PKO EKSTRAKLASA") {
                return (
                  <Game
                    key={index}
                    game={game}
                    index={index}
                    length={34}
                    betsList={currentUserBetsList}
                  />
                );
              } else if (
                game.type === "FORTUNA PUCHAR POLSKI" &&
                active === "Puchar Polski"
              ) {
                return (
                  <Game
                    key={index - 34}
                    game={game}
                    index={index - 34}
                    length={2}
                    betsList={currentUserBetsList}
                  />
                );
              } else {
                return null;
              }
            })}
            {newGamesList().length === 0 ? (
              <Schedule.EmptyResults>
                Brak meczy spełniających Twoje kryteria wyszukiwania
              </Schedule.EmptyResults>
            ) : null}
          </Schedule.ListContainer>
        </Schedule>
      </div>
      <FooterContainer />
    </>
  );
};

export default SchedulePage;
