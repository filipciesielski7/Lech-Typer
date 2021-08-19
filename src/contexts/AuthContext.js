import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, provider } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [loadingBrowse, setLoadingBrowse] = useState(true);

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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsAuthenticating(false);
    });
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
  };
  return (
    <AuthContext.Provider value={value}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
}
