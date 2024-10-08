import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

const urlParams = new URLSearchParams(window.location.search);
const apiKey = urlParams.get("api_key");
if (apiKey)
    localStorage.setItem("api_key", apiKey);

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: localStorage.getItem("api_key") || apiKey,
    },
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll(config?: AxiosRequestConfig) {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }

    get(id: number | string) {
        return axiosInstance.get<T>(`${this.endpoint}/${id}`).then(res => res.data);
    }
}

export default APIClient;