import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase_config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [lodging, setLodging] = useState(true);
  const [user, setUser] = useState();

  const createUser = (email, password) => {
    setLodging(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLodging(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const mailVerification = () => {
    setLodging(true);
    return sendEmailVerification(auth.user);
  };

  const logOut = () => {
    setLodging(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLodging(false);
    });
    return () => {
      return unsubscribed();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    loginUser,
    logOut,
    lodging,
    mailVerification,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
