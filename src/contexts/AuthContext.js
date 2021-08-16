import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, provider } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("");

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
    return auth.signOut();
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
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signin,
    logout,
    sendVerificationEmail,
    resetPassword,
    signupWithTwitter,
    signinWithTwitter,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
