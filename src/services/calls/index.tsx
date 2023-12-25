import api from "services/api";

export const getExchangeRate = (from:string,to:string) => {
    return api.get(`/${from}/${to}.json`);
}