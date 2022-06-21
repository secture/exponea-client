import { ExponeaLibrary } from "./interfaces";
import axios, { AxiosInstance } from "axios";
import { getAuthToken } from "./util";
import {  PathParameter } from "./types";
import { RequestOptions } from "./interfaces/requestOptions";

export class ExponeaWrapper {
    private request: AxiosInstance;

    constructor(apiKey: string, apiSecret: string){
        this.request = axios.create({
            baseURL: "https://api.exponea.com",
            headers: {
                ContentType: 'application/json',
                Accept: 'application/json',
                Authorization: getAuthToken(apiKey, apiSecret),
            },
        });
    }

    public path = <TPath extends keyof ExponeaLibrary>(
        path: TPath,
        ...pathParam: PathParameter<TPath>
    ) => {

        let paramsCount = 0;
        const urlString = path.replace( /\{([^}]+)\}/g,
            () => {
                const param = pathParam[paramsCount];
                paramsCount++;
                return param ? param : null;
            });

        const handlers = {
            get: () => this.request.get(urlString),
            post: (data?: RequestOptions) => this.request.post(urlString, data.body),
            put: (data?: RequestOptions) => this.request.put(urlString, data.body),
            delete: () => this.request.delete(urlString),
        } as ExponeaLibrary[TPath];

        return handlers;
    }
};