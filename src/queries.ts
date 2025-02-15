import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const STALE_TIME = 30 * 60 * 1000;
const APP_QUERY_KEY_BASE = ["formula"] as const;
const API_BASE_PATH = "https://api.jolpi.ca/ergast/f1/";

export const appQueryKeys = {
  base: APP_QUERY_KEY_BASE,
  driverStandingsByYear: (year: number) =>
    [...APP_QUERY_KEY_BASE, "driverStandingsByYear", year] as const,
  constructorStandingsByYear: (year: number) =>
    [...APP_QUERY_KEY_BASE, "constructorStandingsByYear", year] as const,
};

type DriverStandingsT = {
  MRData: {
    StandingsTable: {
      season: string;
      StandingsLists: Array<{
        DriverStandings: Array<{
          position: string;
          positionText: string;
          points: string;
          wins: string;
          Driver: {
            driverId: string;
            code: string;
            url: string;
            dateOfBirth: string;
            familyName: string;
            givenName: string;
            nationality: string;
          };
          Constructors: Array<{
            constructorId: string;
            name: string;
            nationality: string;
            url: string;
          }>;
        }>;
      }>;
    };
  };
};

export function useDriverStandingsByYearQuery(year: number) {
  return useQuery({
    staleTime: STALE_TIME,
    queryKey: appQueryKeys.driverStandingsByYear(year),
    queryFn: async () => {
      const res = await axios.get<DriverStandingsT>(
        API_BASE_PATH + year + "/driverstandings/"
      );
      return res.data;
    },
  });
}

export function useConstructorStandingsByYearQuery(year: number) {
  return useQuery({
    staleTime: STALE_TIME,
    queryKey: appQueryKeys.constructorStandingsByYear(year),
    queryFn: async () => {
      return await fetch(API_BASE_PATH + year + "/constructorstandings/");
    },
  });
}
