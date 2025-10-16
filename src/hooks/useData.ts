import apiClient from "@/Services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
interface FetchResponse<T> {
    count: number;
    results: T[];
}
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState(true);
  const loading = !data.length && !error;
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setError("");
      })
      .catch((er) => {
        if (er instanceof CanceledError) return;
        setError(er.response.data);
        setData([]);
      });
    return () => controller.abort();
  }, []);
  return { data, error, loading };
};
export default useData;