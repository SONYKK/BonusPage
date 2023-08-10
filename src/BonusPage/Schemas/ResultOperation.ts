import {StatusResult} from "./StatusResult";

export interface ResultOperation {
    status:	StatusResult,
    message: string,
    messageDev:	string,
    codeResult:	number,
    duration: number,
    idLog:	string,
}
