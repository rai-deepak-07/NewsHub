import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getStorage,
  setStorage,
} from "../services/storageService";

const STORAGE_KEY = "newshub:bookmarks";

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(
    () => getStorage(STORAGE_KEY) || []
  );

  useEffect(() => {
    setStorage(STORAGE_KEY, bookmarks);
  }, [bookmarks]);

  const isBookmarked = (articleId) =>
    bookmarks.some((item) => item.article_id === articleId);

  const toggleBookmark = (article) => {
    if (!article?.article_id) return;

    setBookmarks((current) => {
      const exists = current.some(
        (item) => item.article_id === article.article_id
      );

      if (exists) {
        return current.filter(
          (item) => item.article_id !== article.article_id
        );
      }

      return [{ ...article, savedAt: Date.now() }, ...current];
    });
  };

  const removeBookmark = (articleId) => {
    setBookmarks((current) =>
      current.filter((item) => item.article_id !== articleId)
    );
  };

  const value = useMemo(
    () => ({
      bookmarks,
      isBookmarked,
      toggleBookmark,
      removeBookmark,
    }),
    [bookmarks]
  );

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const ctx = useContext(BookmarkContext);

  if (!ctx) {
    throw new Error(
      "useBookmarks must be used within a BookmarkProvider"
    );
  }

  return ctx;
};
