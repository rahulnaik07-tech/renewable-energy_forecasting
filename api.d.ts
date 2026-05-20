import type { QueryKey, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { ContinentStat, Country, CountryDetail, CountryEnergyProfile, CountryRanking, EnergyRecord, ForecastPoint, GetGlobalTrendsParams, GetSourceBreakdownParams, GetTopCountriesParams, GlobalStats, HealthStatus, ListAlertsParams, ListCountriesParams, ListEnergyDataParams, PolicyAlert, SourceBreakdown, TrendPoint } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListCountriesUrl: (params?: ListCountriesParams) => string;
/**
 * @summary List all countries
 */
export declare const listCountries: (params?: ListCountriesParams, options?: RequestInit) => Promise<Country[]>;
export declare const getListCountriesQueryKey: (params?: ListCountriesParams) => readonly ["/api/countries", ...ListCountriesParams[]];
export declare const getListCountriesQueryOptions: <TData = Awaited<ReturnType<typeof listCountries>>, TError = ErrorType<unknown>>(params?: ListCountriesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCountries>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listCountries>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListCountriesQueryResult = NonNullable<Awaited<ReturnType<typeof listCountries>>>;
export type ListCountriesQueryError = ErrorType<unknown>;
/**
 * @summary List all countries
 */
export declare function useListCountries<TData = Awaited<ReturnType<typeof listCountries>>, TError = ErrorType<unknown>>(params?: ListCountriesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCountries>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetCountryUrl: (code: string) => string;
/**
 * @summary Get country details
 */
export declare const getCountry: (code: string, options?: RequestInit) => Promise<CountryDetail>;
export declare const getGetCountryQueryKey: (code: string) => readonly [`/api/countries/${string}`];
export declare const getGetCountryQueryOptions: <TData = Awaited<ReturnType<typeof getCountry>>, TError = ErrorType<void>>(code: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCountry>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCountry>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCountryQueryResult = NonNullable<Awaited<ReturnType<typeof getCountry>>>;
export type GetCountryQueryError = ErrorType<void>;
/**
 * @summary Get country details
 */
export declare function useGetCountry<TData = Awaited<ReturnType<typeof getCountry>>, TError = ErrorType<void>>(code: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCountry>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListEnergyDataUrl: (params?: ListEnergyDataParams) => string;
/**
 * @summary List energy data with filters
 */
export declare const listEnergyData: (params?: ListEnergyDataParams, options?: RequestInit) => Promise<EnergyRecord[]>;
export declare const getListEnergyDataQueryKey: (params?: ListEnergyDataParams) => readonly ["/api/energy/data", ...ListEnergyDataParams[]];
export declare const getListEnergyDataQueryOptions: <TData = Awaited<ReturnType<typeof listEnergyData>>, TError = ErrorType<unknown>>(params?: ListEnergyDataParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listEnergyData>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listEnergyData>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListEnergyDataQueryResult = NonNullable<Awaited<ReturnType<typeof listEnergyData>>>;
export type ListEnergyDataQueryError = ErrorType<unknown>;
/**
 * @summary List energy data with filters
 */
export declare function useListEnergyData<TData = Awaited<ReturnType<typeof listEnergyData>>, TError = ErrorType<unknown>>(params?: ListEnergyDataParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listEnergyData>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetCountryEnergyDataUrl: (countryCode: string) => string;
/**
 * @summary Get energy data for a specific country
 */
export declare const getCountryEnergyData: (countryCode: string, options?: RequestInit) => Promise<CountryEnergyProfile>;
export declare const getGetCountryEnergyDataQueryKey: (countryCode: string) => readonly [`/api/energy/data/${string}`];
export declare const getGetCountryEnergyDataQueryOptions: <TData = Awaited<ReturnType<typeof getCountryEnergyData>>, TError = ErrorType<void>>(countryCode: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCountryEnergyData>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCountryEnergyData>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCountryEnergyDataQueryResult = NonNullable<Awaited<ReturnType<typeof getCountryEnergyData>>>;
export type GetCountryEnergyDataQueryError = ErrorType<void>;
/**
 * @summary Get energy data for a specific country
 */
export declare function useGetCountryEnergyData<TData = Awaited<ReturnType<typeof getCountryEnergyData>>, TError = ErrorType<void>>(countryCode: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCountryEnergyData>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetCountryForecastUrl: (countryCode: string) => string;
/**
 * @summary Get renewable energy forecast for a country
 */
export declare const getCountryForecast: (countryCode: string, options?: RequestInit) => Promise<ForecastPoint[]>;
export declare const getGetCountryForecastQueryKey: (countryCode: string) => readonly [`/api/energy/forecast/${string}`];
export declare const getGetCountryForecastQueryOptions: <TData = Awaited<ReturnType<typeof getCountryForecast>>, TError = ErrorType<void>>(countryCode: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCountryForecast>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCountryForecast>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCountryForecastQueryResult = NonNullable<Awaited<ReturnType<typeof getCountryForecast>>>;
export type GetCountryForecastQueryError = ErrorType<void>;
/**
 * @summary Get renewable energy forecast for a country
 */
export declare function useGetCountryForecast<TData = Awaited<ReturnType<typeof getCountryForecast>>, TError = ErrorType<void>>(countryCode: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCountryForecast>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetGlobalStatsUrl: () => string;
/**
 * @summary Get global renewable energy statistics
 */
export declare const getGlobalStats: (options?: RequestInit) => Promise<GlobalStats>;
export declare const getGetGlobalStatsQueryKey: () => readonly ["/api/energy/global-stats"];
export declare const getGetGlobalStatsQueryOptions: <TData = Awaited<ReturnType<typeof getGlobalStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getGlobalStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getGlobalStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetGlobalStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getGlobalStats>>>;
export type GetGlobalStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get global renewable energy statistics
 */
export declare function useGetGlobalStats<TData = Awaited<ReturnType<typeof getGlobalStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getGlobalStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetTopCountriesUrl: (params?: GetTopCountriesParams) => string;
/**
 * @summary Get top countries by renewable capacity or generation
 */
export declare const getTopCountries: (params?: GetTopCountriesParams, options?: RequestInit) => Promise<CountryRanking[]>;
export declare const getGetTopCountriesQueryKey: (params?: GetTopCountriesParams) => readonly ["/api/energy/top-countries", ...GetTopCountriesParams[]];
export declare const getGetTopCountriesQueryOptions: <TData = Awaited<ReturnType<typeof getTopCountries>>, TError = ErrorType<unknown>>(params?: GetTopCountriesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTopCountries>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTopCountries>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTopCountriesQueryResult = NonNullable<Awaited<ReturnType<typeof getTopCountries>>>;
export type GetTopCountriesQueryError = ErrorType<unknown>;
/**
 * @summary Get top countries by renewable capacity or generation
 */
export declare function useGetTopCountries<TData = Awaited<ReturnType<typeof getTopCountries>>, TError = ErrorType<unknown>>(params?: GetTopCountriesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTopCountries>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetSourceBreakdownUrl: (params?: GetSourceBreakdownParams) => string;
/**
 * @summary Get global energy source breakdown
 */
export declare const getSourceBreakdown: (params?: GetSourceBreakdownParams, options?: RequestInit) => Promise<SourceBreakdown[]>;
export declare const getGetSourceBreakdownQueryKey: (params?: GetSourceBreakdownParams) => readonly ["/api/energy/source-breakdown", ...GetSourceBreakdownParams[]];
export declare const getGetSourceBreakdownQueryOptions: <TData = Awaited<ReturnType<typeof getSourceBreakdown>>, TError = ErrorType<unknown>>(params?: GetSourceBreakdownParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSourceBreakdown>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSourceBreakdown>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSourceBreakdownQueryResult = NonNullable<Awaited<ReturnType<typeof getSourceBreakdown>>>;
export type GetSourceBreakdownQueryError = ErrorType<unknown>;
/**
 * @summary Get global energy source breakdown
 */
export declare function useGetSourceBreakdown<TData = Awaited<ReturnType<typeof getSourceBreakdown>>, TError = ErrorType<unknown>>(params?: GetSourceBreakdownParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSourceBreakdown>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetGlobalTrendsUrl: (params?: GetGlobalTrendsParams) => string;
/**
 * @summary Get global renewable energy trends over years
 */
export declare const getGlobalTrends: (params?: GetGlobalTrendsParams, options?: RequestInit) => Promise<TrendPoint[]>;
export declare const getGetGlobalTrendsQueryKey: (params?: GetGlobalTrendsParams) => readonly ["/api/energy/trends", ...GetGlobalTrendsParams[]];
export declare const getGetGlobalTrendsQueryOptions: <TData = Awaited<ReturnType<typeof getGlobalTrends>>, TError = ErrorType<unknown>>(params?: GetGlobalTrendsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getGlobalTrends>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getGlobalTrends>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetGlobalTrendsQueryResult = NonNullable<Awaited<ReturnType<typeof getGlobalTrends>>>;
export type GetGlobalTrendsQueryError = ErrorType<unknown>;
/**
 * @summary Get global renewable energy trends over years
 */
export declare function useGetGlobalTrends<TData = Awaited<ReturnType<typeof getGlobalTrends>>, TError = ErrorType<unknown>>(params?: GetGlobalTrendsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getGlobalTrends>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListAlertsUrl: (params?: ListAlertsParams) => string;
/**
 * @summary List policy and milestone alerts
 */
export declare const listAlerts: (params?: ListAlertsParams, options?: RequestInit) => Promise<PolicyAlert[]>;
export declare const getListAlertsQueryKey: (params?: ListAlertsParams) => readonly ["/api/alerts", ...ListAlertsParams[]];
export declare const getListAlertsQueryOptions: <TData = Awaited<ReturnType<typeof listAlerts>>, TError = ErrorType<unknown>>(params?: ListAlertsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAlerts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listAlerts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListAlertsQueryResult = NonNullable<Awaited<ReturnType<typeof listAlerts>>>;
export type ListAlertsQueryError = ErrorType<unknown>;
/**
 * @summary List policy and milestone alerts
 */
export declare function useListAlerts<TData = Awaited<ReturnType<typeof listAlerts>>, TError = ErrorType<unknown>>(params?: ListAlertsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAlerts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetContinentStatsUrl: () => string;
/**
 * @summary Get renewable energy stats grouped by continent
 */
export declare const getContinentStats: (options?: RequestInit) => Promise<ContinentStat[]>;
export declare const getGetContinentStatsQueryKey: () => readonly ["/api/energy/continent-stats"];
export declare const getGetContinentStatsQueryOptions: <TData = Awaited<ReturnType<typeof getContinentStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getContinentStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getContinentStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetContinentStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getContinentStats>>>;
export type GetContinentStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get renewable energy stats grouped by continent
 */
export declare function useGetContinentStats<TData = Awaited<ReturnType<typeof getContinentStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getContinentStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map