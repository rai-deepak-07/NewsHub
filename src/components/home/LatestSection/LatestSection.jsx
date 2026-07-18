import InfiniteScroll from "react-infinite-scroll-component";

import Container from "../../common/Container/Container";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import NewsGrid from "../../news/NewsGrid/NewsGrid";
import NewsCard from "../../news/NewsCard/NewsCard";
import Loader from "../../common/Loader/Loader";
import ErrorState from "../../common/ErrorState/ErrorState";
import EmptyState from "../../common/EmptyState/EmptyState";
import { NewsGridSkeleton } from "../../common/Skeleton/Skeleton";

const LatestSection = ({ newsQuery, articles = [] }) => {
  const { fetchNextPage, hasNextPage, isLoading, isError, refetch } = newsQuery;

  return (
    <section>
      <Container>
        <SectionTitle
          title="Latest News"
          subtitle="Stay updated with live headlines"
        />

        {isLoading && <NewsGridSkeleton count={6} />}

        {!isLoading && isError && <ErrorState onRetry={refetch} />}

        {!isLoading && !isError && articles.length === 0 && (
          <EmptyState
            title="No stories yet"
            message="Check back soon for the latest headlines."
          />
        )}

        {!isLoading && !isError && articles.length > 0 && (
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
        )}
      </Container>
    </section>
  );
};

export default LatestSection;
