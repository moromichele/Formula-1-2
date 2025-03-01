import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { ConstructorStandingsDataT, DriverStandingsDataT } from "./types"

const STALE_TIME = 30 * 60 * 1000
const APP_QUERY_KEY_BASE = ["formula"] as const
const API_BASE_PATH = "https://api.jolpi.ca/ergast/f1/"

export const appQueryKeys = {
	base: APP_QUERY_KEY_BASE,
	driverStandingsByYear: (year: number) =>
		[...APP_QUERY_KEY_BASE, "driverStandingsByYear", year] as const,
	constructorStandingsByYear: (year: number) =>
		[...APP_QUERY_KEY_BASE, "constructorStandingsByYear", year] as const,
}

export function useDriverStandingsByYearQuery(year: number) {
	return useQuery({
		staleTime: STALE_TIME,
		queryKey: appQueryKeys.driverStandingsByYear(year),
		queryFn: async () => {
			const res = await axios.get<DriverStandingsDataT>(
				API_BASE_PATH + year + "/driverstandings/"
			)
			console.log({ res })
			return res.data
		},
	})
}

export function useConstructorStandingsByYearQuery(year: number) {
	return useQuery({
		staleTime: STALE_TIME,
		queryKey: appQueryKeys.constructorStandingsByYear(year),
		queryFn: async () => {
			const res = await axios.get<ConstructorStandingsDataT>(
				API_BASE_PATH + year + "/constructorstandings/"
			)
			return res.data
		},
	})
}
