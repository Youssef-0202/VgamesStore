import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    const Controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: Controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
      });
    return () => Controller.abort();
  }, []);

  return { games, err };
};
