"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";

interface RaceState {
  students: string[];
  raceStarted: boolean;
}

const defaultRaceState: RaceState = {
  students: [],
  raceStarted: false
};

type RaceStateSetter = (key: keyof RaceState, value: boolean | string[]) => void;

export interface RaceContext {
  raceState: RaceState;
  setRaceState: RaceStateSetter;
}

export const RaceContext = createContext<RaceContext | null>({
  raceState: defaultRaceState,
  setRaceState: (_key, _value) => {},
});

export const useRaceContext = () => useContext(RaceContext) as RaceContext;

interface RaceContextProps extends PropsWithChildren {}

export const RaceContextProvider = ({ children }: RaceContextProps) => {
  const [raceState, _setRaceState] = useState<RaceState>(defaultRaceState);

  const setRaceState: RaceStateSetter = (key, value) => {
    _setRaceState({
      ...raceState,
      [key]: value,
    });
  };

  return (
    <RaceContext.Provider
      value={{
        raceState,
        setRaceState
      }}
    >
      {children}
    </RaceContext.Provider>
  );
};
