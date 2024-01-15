"use client";

import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface Props {
  children: JSX.Element;
}

export const Providers: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
