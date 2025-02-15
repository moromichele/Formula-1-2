import { useQuery } from "@tanstack/react-query";

const STALE_TIME = 30 * 60 * 1000
const APP_QUERY_KEY_BASE = ['formula'] as const

export const appQueryKeys = {
    base: APP_QUERY_KEY_BASE,
    standingsByYear: (year: string) => [...APP_QUERY_KEY_BASE, 'standingsByYear', year] as const
}

export function useStandingsByYearQuery(year: string = '1997'){
    return useQuery({
        staleTime: STALE_TIME,
        queryKey: appQueryKeys.standingsByYear(year),
        queryFn: () => {
            return {year, 1: "Leclerc", 2: 'Hamilton'}
        }
    })
}