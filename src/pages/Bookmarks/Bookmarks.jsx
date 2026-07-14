import { Bookmark as BookmarkIcon } from "lucide-react";

import Container from "../../components/common/Container/Container";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";
import NewsGrid from "../../components/news/NewsGrid/NewsGrid";
import NewsCard from "../../components/news/NewsCard/NewsCard";
import EmptyState from "../../components/common/EmptyState/EmptyState";
import { useBookmarks } from "../../context/BookmarkContext";

const Bookmarks = () => {
  const { bookmarks } = useBookmarks();

  return (
    <div className="pb-8">
      <Container>
        <SectionTitle
          title="Saved Articles"
          subtitle={`${bookmarks.length} article${
            bookmarks.length === 1 ? "" : "s"
          } saved for later`}
        />

        {bookmarks.length === 0 ? (
          <EmptyState
            icon={BookmarkIcon}
            title="No saved articles yet"
            message="Tap the bookmark icon on any story to save it here for later."
          />
        ) : (
          <NewsGrid>
            {bookmarks.map((article) => (
              <NewsCard key={article.article_id} article={article} />
            ))}
          </NewsGrid>
        )}
      </Container>
    </div>
  );
};

export default Bookmarks;
