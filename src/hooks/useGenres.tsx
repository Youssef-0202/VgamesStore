import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const Controller = new AbortController();
    setIsloading(true);
    apiClient
      .get<FetchGenreResponse>("/genres", { signal: Controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setIsloading(false);
      });
    return () => Controller.abort();
  }, []);

  return { genres, err, isLoading };
};

export default useGenres;
