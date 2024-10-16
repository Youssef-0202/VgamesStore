import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const Controller = new AbortController();
    setIsloading(true);
    apiClient
      .get<FetchGamesResponse>("/games", { signal: Controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setIsloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setIsloading(false);
      });
    return () => Controller.abort();
  }, []);

  return { games, err, isLoading };
};
