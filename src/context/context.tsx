"use client";

import { Prisma, User } from "@prisma/client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";


interface ContextProps {
  setUser: Dispatch<SetStateAction<Partial<User>>>;
  user: Partial<User>;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const Context = createContext({} as ContextProps);

export function ContextProvider({ children }: ContextProviderProps) {
  const [user, setUser] = useState<Partial<User>>({});

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
}

export function useDefaultAppContext() {
  const context = useContext(Context);
  return context;
}
