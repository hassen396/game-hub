import apiClient from "@/Services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}
interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<GamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setError("");
      })
      .catch((er) => {
        if(er instanceof CanceledError) return;
        setError(er.response.data);
        setGames([]);
      })
      .finally();
    return ()=> controller.abort();
  }, []);
  return { games, error };
};
export default useGames;
