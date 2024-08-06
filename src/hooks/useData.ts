import axios, { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import APIClient from "../services/api-client";

interface FetchResponse<T> {
    count: number;
    results: T[];
}
const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: localStorage.getItem("rawg_api_key"),
    },
});
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then((res) => {
                setData(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                if (!(err instanceof CanceledError))
                    setError(err.message)
                setLoading(false);
            });

        return () => controller.abort();
    }, deps ? [...deps] : []);

    return { data, error, isLoading }
};

export default useData;