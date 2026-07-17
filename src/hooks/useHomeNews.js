import useInfiniteNews from "./useInfiniteNews";

const useHomeNews = () => {
  const newsQuery = useInfiniteNews();

  const articles =
    newsQuery.data?.pages.flatMap(
      (page) => page.results || []
    ) || [];

  return {
    ...newsQuery,

    articles,

    featured: articles[0] || null,

    breaking: articles.slice(1, 6),

    trending: articles.slice(6, 12),

    latest: articles.length > 12? articles.slice(12): articles
  };
};

export default useHomeNews;