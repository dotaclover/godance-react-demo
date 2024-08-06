import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import Genre from "../entities/Genre";
const apiClient = new APIClient<Genre>("/genres");

// const useGenres = () => useData<Genre>('/genres');
// export default useGenres;

// const useGenres = () => ({ data: genres, error: null, isLoading: false });
// export default useGenres;

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"),
    initialData: genres,
})
export default useGenres;
