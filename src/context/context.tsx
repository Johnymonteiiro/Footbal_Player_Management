"use client";

import { DataTypes } from "@/types/types";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";


interface ContextProps {
  setResult: Dispatch<SetStateAction<DataTypes[]>>;
  result: DataTypes[];
}

interface ContextProviderProps {
  children: ReactNode;
}

export const Context = createContext({} as ContextProps);

export function ContextProvider({ children }: ContextProviderProps) {
  const [result, setResult] = useState<DataTypes[]>([]);

  return (
    <Context.Provider
      value={{result, setResult}}
    >
      {children}
    </Context.Provider>
  );
}

export function usePrimeContext() {
  const context = useContext(Context);
  return context;
}
