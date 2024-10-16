import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requistConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsloading] = useState(false);

  useEffect(
    () => {
      const Controller = new AbortController();
      setIsloading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: Controller.signal,
          ...requistConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setIsloading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setErr(err.message);
          setIsloading(false);
        });
      return () => Controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, err, isLoading };
};

export default useData;
