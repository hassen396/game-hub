import apiClient from "@/Services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  rating: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<GamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setError("");
      })
      .catch((er) => {
        if (er instanceof CanceledError) return;
        setError(er.response.data);
        setGames([]);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);
  return { games, error, loading };
};
export default useGames;
