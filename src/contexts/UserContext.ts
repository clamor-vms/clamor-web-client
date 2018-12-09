import * as React from "react";

const UserContext = React.createContext({});

export const UserProvider = UserContext.Provider;
export interface IUserProvider {
  value: any;
}

export const UserConsumer = UserContext.Consumer;
export interface IUserConsumer {
  authorization: string;
}
