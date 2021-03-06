import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, provider, db } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [loadingBrowse, setLoadingBrowse] = useState(true);
  const [loadingFirstBrowse, setLoadingFirstBrowse] = useState(true);
  const [deletedAccount, setDeletedAccount] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [gamesList, setGamesList] = useState([]);
  const [betsList, setBetsList] = useState([]);
  const [currentUserBetsList, setCurrentUserBetsList] = useState([]);
  const [nextGame, setNextGame] = useState("");
  const [endDate, setEndDate] = useState("");

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function signin(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function signupWithTwitter(email, password) {
    auth.languageCode = "pl";
    return auth.signInWithPopup(provider);
  }

  function signinWithTwitter(email, password) {
    auth.languageCode = "pl";
    return auth.signInWithPopup(provider);
  }

  function logout() {
    localStorage.removeItem("twitterUsername");
    localStorage.removeItem("twitterProfileImage");
    setLoadingBrowse(true);
    return auth.signOut().then(() => {
      setCurrentUser(null);
    });
  }

  function sendVerificationEmail() {
    return auth.currentUser.sendEmailVerification();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function loadData(time = 100) {
    const interval = setInterval(function () {
      if (
        typeof usersList[0] === "object" &&
        typeof gamesList[0] === "object" &&
        typeof betsList[0] === "object" &&
        typeof currentUser.uid === "string"
      ) {
        for (let i = 0; i < betsList.length; i++) {
          if (betsList[i].user === currentUser.uid) {
            setCurrentUserBetsList(betsList[i].bets);
          }
        }
        setNextGame(gamesList.find((element) => element.home_score === ""));
        const interval2 = setInterval(function () {
          if (
            typeof currentUserBetsList !== [] &&
            typeof nextGame === "object"
          ) {
            setEndDate(
              new Date(
                `${
                  nextGame.date.slice(6, 10) +
                  "-" +
                  nextGame.date.slice(3, 5) +
                  "-" +
                  nextGame.date.slice(0, 2) +
                  "T" +
                  nextGame.date.slice(-5) +
                  ":00"
                }`
              ).getTime()
            );
            setLoadingBrowse(false);
            clearInterval(interval2);
            clearInterval(interval);
          }
        }, time);
      }
    }, time);
  }

  function getGamesList(
    uid = "",
    home_score = "",
    away_score = "",
    home_team = "",
    away_team = "",
    home_team_logo = "",
    away_team_logo = "",
    date = "",
    type = "",
    type_logo = "",
    withAdding = false
  ) {
    const games = db.ref("games");
    let gamesArray = []; // LET TO ADD POLISH CUP
    if (withAdding) {
      games
        .child(`${uid}`)
        .once("value")
        .then((snapshot) => {
          if (snapshot.exists() && snapshot.val().game_id !== "null") {
            return null;
          } else {
            db.ref(`games/${uid}`).set({
              game_id: `${uid}`,
              home_score: `${home_score}`,
              away_score: `${away_score}`,
              home_team: `${home_team}`,
              away_team: `${away_team}`,
              home_team_logo: `${home_team_logo}`,
              away_team_logo: `${away_team_logo}`,
              date: `${date}`,
              type: `${type}`,
              type_logo: `${type_logo}`,
            });
          }
        })
        .then(() => {
          games.on("value", (snapshot) => {
            for (const [, value] of Object.entries(snapshot.val())) {
              gamesArray.push({
                game_id: value.game_id,
                home_score: value.home_score,
                away_score: value.away_score,
                home_team: value.home_team,
                away_team: value.away_team,
                home_team_logo: value.home_team_logo,
                away_team_logo: value.away_team_logo,
                date: value.date,
                type: value.type,
                type_logo: value.type_logo,
              });
            }
          });
        });
    } else {
      games.on("value", (snapshot) => {
        if (snapshot.exists()) {
          for (const [, value] of Object.entries(snapshot.val())) {
            gamesArray.push({
              game_id: value.game_id,
              home_score: value.home_score,
              away_score: value.away_score,
              home_team: value.home_team,
              away_team: value.away_team,
              home_team_logo: value.home_team_logo,
              away_team_logo: value.away_team_logo,
              date: value.date,
              type: value.type,
              type_logo: value.type_logo,
            });
          }

          // ADDING POLISH CUP
          let newArray = gamesArray.slice(0, 16);
          newArray.push(gamesArray[34]);
          gamesArray.slice(16, 35).forEach((element) => newArray.push(element));
          newArray.push(gamesArray[35]);
          newArray.push(gamesArray[36]);
          gamesArray = newArray;
        }
      });
    }

    return gamesArray;
  }

  function getUsersList(
    uid = "",
    username = "",
    photoURL = "",
    withAdding = false
  ) {
    const users = db.ref("users");
    const usersArray = [];
    if (withAdding) {
      users
        .child(`${uid}`)
        .once("value")
        .then((snapshot) => {
          if (snapshot.exists() && snapshot.val().user_name !== "null") {
            // db.ref(`users/${uid}`).update({ photoURL: photoURL });
            // db.ref(`users/${uid}`).update({ user_name: `${username}` });
            // TO BE ADDED IN THE FUTURE - UPDATING USERNAME AND PHOTOURL FROM TWITTER ON CHANGE
            return null;
          } else {
            db.ref(`users/${uid}`).set({
              user_id: `${uid}`,
              user_name: `${username}`,
              photoURL: photoURL,
              points: 0,
            });
          }
        })
        .then(() => {
          users.on("value", (snapshot) => {
            for (const [, value] of Object.entries(snapshot.val())) {
              usersArray.push({
                user_name: value.user_name,
                user_id: value.user_id,
                photoURL: value.photoURL,
                points: value.points,
              });
            }
          });
        });
    } else {
      users.on("value", (snapshot) => {
        if (snapshot.exists()) {
          for (const [, value] of Object.entries(snapshot.val())) {
            usersArray.push({
              user_name: value.user_name,
              user_id: value.user_id,
              photoURL: value.photoURL,
              points: value.points,
            });
          }
        }
      });
    }
    return usersArray;
  }

  function getBetsList() {
    const bets = db.ref("bets");
    const betsArray = [];
    bets.on("value", (snapshot) => {
      if (snapshot.exists()) {
        for (const [user, value] of Object.entries(snapshot.val())) {
          betsArray.push({ user: user, bets: value });
        }
      }
    });
    return betsArray;
  }

  function updatePoints() {
    const previousGame = gamesList[nextGame.game_id - 2];
    const users = db.ref("users");
    const points = db.ref("points");
    points.on("value", (snapshot) => {
      if (snapshot.exists()) {
        for (const [user, value] of Object.entries(snapshot.val())) {
          if (value[previousGame.game_id] === "") {
            let homeBetScore;
            let awayBetScore;

            betsList.forEach((bet) => {
              if (bet.user === user) {
                homeBetScore = "";
                awayBetScore = "";

                homeBetScore = bet.bets[previousGame.game_id].substr(
                  0,
                  bet.bets[previousGame.game_id].indexOf(":")
                );
                awayBetScore = bet.bets[previousGame.game_id].substr(
                  bet.bets[previousGame.game_id].indexOf(":") + 1
                );

                let pointsNumber;
                if (
                  homeBetScore === previousGame.home_score &&
                  awayBetScore === previousGame.away_score
                ) {
                  pointsNumber = 3;
                } else if (
                  parseInt(homeBetScore) - parseInt(awayBetScore) ===
                  previousGame.home_score - previousGame.away_score
                ) {
                  pointsNumber = 2;
                } else if (
                  parseInt(homeBetScore) - parseInt(awayBetScore) > 0 &&
                  previousGame.home_score - previousGame.away_score > 0
                ) {
                  pointsNumber = 1;
                } else if (
                  parseInt(homeBetScore) - parseInt(awayBetScore) < 0 &&
                  previousGame.home_score - previousGame.away_score < 0
                ) {
                  pointsNumber = 1;
                } else {
                  pointsNumber = 0;
                }

                points
                  .child(`${user}/${previousGame.game_id}`)
                  .set(`${pointsNumber}`);
              }

              let pointsSum = 0;
              for (const item of Object.entries(value)) {
                if (item[0] !== "exists" && item[1] !== "") {
                  pointsSum = pointsSum + parseInt(item[1]);
                }
              }

              users.child(`${user}/points`).set(`${pointsSum}`);
            });
          }
        }
      }
    });
    points.on("value", (snapshot) => {
      if (snapshot.exists()) {
        for (const [user, value] of Object.entries(snapshot.val())) {
          let pointsSum = 0;
          for (const item of Object.entries(value)) {
            if (item[0] !== "exists" && item[1] !== "") {
              pointsSum = pointsSum + parseInt(item[1]);
            }
          }

          users.child(`${user}/points`).set(`${pointsSum}`);
        }
      }
    });
    return;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsAuthenticating(false);
    });
    setUsersList(getUsersList());
    setGamesList(getGamesList());
    setBetsList(getBetsList());
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    isAuthenticating,
    signup,
    signin,
    logout,
    sendVerificationEmail,
    resetPassword,
    signupWithTwitter,
    signinWithTwitter,
    loadingBrowse,
    setLoadingBrowse,
    loadingFirstBrowse,
    setLoadingFirstBrowse,
    deletedAccount,
    setDeletedAccount,
    db,
    getUsersList,
    getGamesList,
    getBetsList,
    betsList,
    usersList,
    setUsersList,
    gamesList,
    loadData,
    currentUserBetsList,
    setCurrentUserBetsList,
    nextGame,
    endDate,
    updatePoints,
  };
  return (
    <AuthContext.Provider value={value}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
}
