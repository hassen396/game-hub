import apiClient from "@/Services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
interface Genre {
    id: number;
    name: string;
}
interface GenreResponse {
    count: number;
    results: Genre[];
}
const useGenres = () => {
    const [genres, setgenres] = useState<Genre[]>([]);
      const [error, setError] = useState("");
      // const [loading, setLoading] = useState(true);
      const loading = !genres.length && !error;
      useEffect(() => {
        const controller = new AbortController();
        apiClient
          .get<GenreResponse>("/genres", { signal: controller.signal })
          .then((res) => {
            setgenres(res.data.results);
            setError("");
          })
          .catch((er) => {
            if (er instanceof CanceledError) return;
            setError(er.response.data);
            setgenres([]);
          });
        return () => controller.abort();
      }, []);
      return { genres, error, loading };
};

export default useGenres;
