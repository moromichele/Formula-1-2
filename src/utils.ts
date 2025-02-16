import { ConstructorStandingsDataT, DriverStandingsDataT } from "./types"

export function getDriverStandingByDriverStandingsData(data: DriverStandingsDataT, position: number) {
    const driverStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
	if(position<0 || position > driverStandings.length) return undefined
    return data.MRData.StandingsTable.StandingsLists[0].DriverStandings[position]
}

export function getConstructorByConstructorStandingsData(data: ConstructorStandingsDataT, position: number){
	if(position<0 || position > data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.length) return undefined
    return data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[position]
}