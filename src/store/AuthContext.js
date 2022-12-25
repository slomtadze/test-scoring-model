import React, { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase.config";

const AuthContext = React.createContext({
  user: {},
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const loginHandler = async (email, password, navigate, setError) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("success");
        navigate("../admin");
      })
      .catch((error) => {
        console.log(error.code);
        setError(error.code);
      });
  };

  const logoutHandler = () => {
    signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  const contextValue = {
    user: user,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
