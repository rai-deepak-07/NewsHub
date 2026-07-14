import { useInfiniteQuery } from "@tanstack/react-query";
import { getNews } from "../api/newsApi";
import { useFilter } from "../context/FilterContext";

const useInfiniteNews = ({ category, query, enabled = true } = {}) => {
  const { country, language } = useFilter();

  return useInfiniteQuery({
    queryKey: ["news", country, language, category, query],

    queryFn: ({ pageParam = null }) =>
      getNews({
        country,
        language,
        category,
        query,
        nextPage: pageParam,
      }),

    initialPageParam: null,

    getNextPageParam: (lastPage) => lastPage.nextPage || undefined,

    enabled,
  });
};

export default useInfiniteNews;
