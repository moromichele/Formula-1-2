export type DriverStandingsDataT = {
	MRData: {
		StandingsTable: {
			season: string
			StandingsLists: Array<{
				DriverStandings: Array<{
					position: string
					positionText: string
					points: string
					wins: string
					Driver: DriverT
					Constructors: Array<ConstructorT>
				}>
			}>
		}
	}
}

export type DriverT = {
	driverId: string
	code: string
	url: string
	dateOfBirth: string
	familyName: string
	givenName: string
	nationality: string
}

export type ConstructorT = {
    constructorId: string
    name: string
    nationality: string
    url: string
}

export type ConstructorStandingsDataT = {
	MRData: {
		StandingsTable: {
			season: string
			StandingsLists: Array<{
				ConstructorStandings: Array<{
					position: string
					positionText: string
					points: string
					wins: string
					Constructor: ConstructorT
				}>
			}>
		}
	}
}