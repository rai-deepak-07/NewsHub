import { useNavigate } from "react-router-dom";
import { Bookmark, ExternalLink, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

import NewsMeta from "../NewsMeta/NewsMeta";
import truncateText from "../../../utils/truncateText";
import { useBookmarks } from "../../../context/BookmarkContext";

const NewsCard = ({ article }) => {
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks();

  if (!article) return null;

  const {
    article_id,
    title,
    description,
    image_url,
    source_name,
    pubDate,
    category,
    link,
  } = article;

  const saved = isBookmarked(article_id);

  const handleShare = async (event) => {
    event.stopPropagation();

    if (navigator.share) {
      try {
        await navigator.share({ title, url: link });
      } catch {
        // user cancelled share — no-op
      }
    } else if (link) {
      await navigator.clipboard.writeText(link);
    }
  };

  const handleOpenDetails = () => {
    navigate(`/news/${article_id}`, { state: { article } });
  };

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      onClick={handleOpenDetails}
      // Added max-w-md (maximum width) and mx-auto so it never balloons up on large screens
      className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl w-full max-w-sm sm:max-w-md mx-auto flex flex-col h-full"
    >
      {/* Image */}
      {/* Changed aspect ratio to 16/10 for a slightly shorter, tighter image footprint */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={
            image_url ||
            "https://placehold.co/800x450/e2e8f0/64748b?text=No+Image"
          }
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {category && (
          <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold capitalize text-white">
            {Array.isArray(category) ? category[0] : category}
          </span>
        )}
      </div>

      {/* Content */}
      {/* Flex layout forces the card footer to line up perfectly even if text sizes differ */}
      <div className="flex flex-col flex-1 justify-between p-5 space-y-3">
        <div className="space-y-2">
          <h3 className="line-clamp-2 text-base font-bold text-slate-900 sm:text-lg">
            {title}
          </h3>

          {/* Reduced line clamp to 2 lines so long snippets don't push the card height down */}
          <p className="line-clamp-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
            {truncateText(description, 110)}
          </p>
        </div>

        <div className="space-y-3 pt-1">
          <NewsMeta source={source_name} pubDate={pubDate} />

          {/* Actions */}
          <div className="flex items-center justify-between border-t border-slate-100 pt-3">
            <div className="flex gap-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleBookmark(article);
                }}
                aria-label={saved ? "Remove bookmark" : "Save article"}
                className={clsx(
                  "rounded-xl p-2 transition hover:bg-slate-100",
                  saved ? "text-blue-600" : "text-slate-500"
                )}
              >
                <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
              </button>

              <button
                onClick={handleShare}
                aria-label="Share article"
                className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100"
              >
                <Share2 size={18} />
              </button>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(link, "_blank", "noopener,noreferrer");
              }}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-1.5 text-xs font-medium text-white transition hover:bg-blue-700 sm:text-sm"
            >
              Read
              <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default NewsCard;