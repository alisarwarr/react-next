//ENVIRONMENTS
import { API_INSTANCE } from "./Environments";
//AXIOS
import axios, { AxiosInstance, AxiosResponse } from "axios";


export const ApiRequest = (isAuth: boolean): AxiosInstance => {
    const request = axios.create({
        baseURL: API_INSTANCE,
        headers: isAuth
            ? {
                Authorization: `Bearer ${
                    localStorage.getItem("accessToken")
                          ? localStorage.getItem("accessToken")
                          : null
                }`,
              }
            : {},
        responseType: "json",
        socketPath: null
    });

    request.interceptors.response.use(
        (response: AxiosResponse) => response,
        (error: any) => {
            if (error.code === "ERR_NETWORK") {
                return;
            }

            if (error.response.status === 401) {
                // logout();
                return;
            }

            if (error.response.status === 403) {
                // logout();
                return;
            }

            return Promise.reject(error.response);
        }
    );

    return request;
}