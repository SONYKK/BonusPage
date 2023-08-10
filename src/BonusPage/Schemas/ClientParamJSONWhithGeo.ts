import {SourceQuery} from "./SourceQuery";

export interface ClientParamJSONWhithGeo {
    idClient: string,
    accessToken: {}
    paramName: string,
    paramValue: string,
    latitude: number,
    longitude: number,
    sourceQuery: SourceQuery | 0
}
