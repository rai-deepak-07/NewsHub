import InfiniteScroll from "react-infinite-scroll-component";

import NewsGrid from "../NewsGrid/NewsGrid";
import NewsCard from "../NewsCard/NewsCard";
import Loader from "../../common/Loader/Loader";
import ErrorState from "../../common/ErrorState/ErrorState";
import EmptyState from "../../common/EmptyState/EmptyState";
import { NewsGridSkeleton } from "../../common/Skeleton/Skeleton";

// Shared list rendering for any paginated news query: handles the
// loading / error / empty / infinite-scroll states in one place so
// pages (Latest, Category, Search, Bookmarks) don't duplicate this logic.
const NewsResults = ({
  newsQuery,
  emptyTitle = "No stories found",
  emptyMessage = "Try a different filter or search term.",
}) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    refetch,
  } = newsQuery;

  const articles = data?.pages.flatMap((page) => page.results || []) || [];

  if (isLoading) return <NewsGridSkeleton count={6} />;

  if (isError) return <ErrorState onRetry={refetch} />;

  if (!articles.length) {
    return <EmptyState title={emptyTitle} message={emptyMessage} />;
  }

  return (
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchNextPage}
      hasMore={Boolean(hasNextPage)}
      loader={<Loader label="Loading more stories..." />}
      endMessage={
        <p className="py-10 text-center text-slate-500">
          🎉 You've reached the end.
        </p>
      }
    >
      <NewsGrid>
        {articles.map((article) => (
          <NewsCard key={article.article_id} article={article} />
        ))}
      </NewsGrid>
    </InfiniteScroll>
  );
};

export default NewsResults;
