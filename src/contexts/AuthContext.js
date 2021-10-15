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
    let gamesArray = []; // let z const aby dodac PUCHAR POLSKI
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

          // ABY DODAC PUCHAR POLSKI (MANUALNIE)
          let newArray = gamesArray.slice(0, 9);
          newArray.push(gamesArray[34]);
          gamesArray.slice(9, 34).forEach((element) => newArray.push(element));
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
            db.ref(`users/${uid}`).update({ photoURL: photoURL });
            db.ref(`users/${uid}`).update({ user_name: `${username}` });
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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsAuthenticating(false);
    });
    setUsersList(getUsersList());
    setGamesList(getGamesList());
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
    usersList,
    setUsersList,
    gamesList,
  };
  return (
    <AuthContext.Provider value={value}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
}
