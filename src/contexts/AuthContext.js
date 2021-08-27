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
  const [deletedAccount, setDeletedAccount] = useState(false);
  const [usersList, setUsersList] = useState([]);

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
    deletedAccount,
    setDeletedAccount,
    db,
    getUsersList,
    usersList,
    setUsersList,
  };
  return (
    <AuthContext.Provider value={value}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
}
