import { ConstructorStandingsDataT, ConstructorStandingT, DriverStandingsDataT, DriverStandingT } from "./types"

export function getDriversByDriverStandingsData(
	data: DriverStandingsDataT,
): Array<DriverStandingT> {
	return data.MRData.StandingsTable.StandingsLists[0].DriverStandings
}

export function getConstructorsByConstructorStandingsData(
	data: ConstructorStandingsDataT,
): Array<ConstructorStandingT> {
	return data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
}

export function isInvalidStandings(
	data: ConstructorStandingsDataT | DriverStandingsDataT | undefined
) {
	if (!data) return true
	if (data.MRData.StandingsTable.StandingsLists.length === 0) return true
	return false
}
