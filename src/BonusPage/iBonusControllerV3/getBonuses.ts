import ky from 'ky';
import {AccessKey, fetchAccessToken} from "../ClientsV3/getAccessToken";
import {InfoByAvailableBonuses} from "../Schemas/InfoByAvailableBonuses";

export async function fetchIBonus(): Promise<InfoByAvailableBonuses> {

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

    const res = api.get(await Promise.resolve(fetchAccessToken())
        .then(res=> `http://84.201.188.117:5003/api/v3/ibonus/generalinfo/${
            res.accessToken}`)).json()

    return res as unknown as InfoByAvailableBonuses;
}
