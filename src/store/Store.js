import React, { useState, createContext } from "react";

export const UserContext = createContext("UserContext");

const Store = ({ children }) => {
  const [user, setUser] = useState({ name: null, email: null, userId: 1 });
  return <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>;
};
export default Store;
