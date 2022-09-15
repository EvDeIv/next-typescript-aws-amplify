import axios from "axios";
import useSWR, { Fetcher } from "swr";

interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const fetcher: Fetcher<IPost[], string> = (url: string) =>
  axios.get(url).then((res) => {
    return res.data;
  });

export const useArticles = (limit: number) => {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
    fetcher
  );

  return {
    data: data,
    isLoading: !data && !error,
    error: error,
  };
};
