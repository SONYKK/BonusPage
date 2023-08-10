import {ClientParamJSONWhithGeo} from "../Schemas/ClientParamJSONWhithGeo";
import {ACCESSKEY, CLIENTID, DEVICEID} from "../../appsettings";
import ky from "ky";
import {ResultAuthV3} from "../Schemas/ResultAuthV3";

const ClientID = CLIENTID as string;
const DeviceID = DEVICEID as string;
export const AccessKey = ACCESSKEY as string;

const AccessKeyData:ClientParamJSONWhithGeo = {
    idClient: ClientID,
    accessToken: "",
    paramName: "device",
    paramValue: DeviceID,
    latitude: 0,
    longitude: 0,
    sourceQuery: 0,
}

const AccessTokenURL = 'http://84.201.188.117:5021/api/v3/clients/accesstoken'

export async function fetchAccessToken(): Promise<ResultAuthV3> {

    const api = ky.extend({
        hooks: {
            beforeRequest: [
                request => {
                    request.headers.set(
                        'AccessKey', AccessKey,
                    );
                }
            ]
        }
    });
    
    const response = await api.post(AccessTokenURL, {json:AccessKeyData}).json();
    return response as ResultAuthV3;
}
