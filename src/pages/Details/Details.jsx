import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Bookmark,
  Calendar,
  ExternalLink,
  Share2,
} from "lucide-react";
import clsx from "clsx";

import Container from "../../components/common/Container/Container";
import Button from "../../components/common/Button/Button";
import EmptyState from "../../components/common/EmptyState/EmptyState";
import formatDate from "../../utils/formatDate";
import { useBookmarks } from "../../context/BookmarkContext";

const Details = () => {
  const { articleId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const article = location.state?.article;

  if (!article) {
    return (
      <div className="py-12">
        <Container maxW="md">
          <EmptyState
            title="Article not available"
            message="Open this story from the home feed, category, or search page to view its full details."
            action={
              <Button onClick={() => navigate("/")} size="sm">
                Back to Home
              </Button>
            }
          />
        </Container>
      </div>
    );
  }

  const saved = isBookmarked(article.article_id || articleId);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: article.title, url: article.link });
      } catch {
        // user cancelled share
      }
    } else if (article.link) {
      await navigator.clipboard.writeText(article.link);
    }
  };

  const displayCategory = article.category 
    ? (Array.isArray(article.category) ? article.category[0] : article.category) 
    : null;

  return (
    <div className="pb-8">
      <Container className="max-w-2xl px-4 sm:px-6">
        
        {/* Subtle Back Button Navigation */}
        <button
          onClick={() => navigate(-1)}
          className="mb-5 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft size={14} className="stroke-[2.5]" />
          Back to feed
        </button>

        <article className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-xs sm:p-8">
          
          {/* Category Tag */}
          {displayCategory && (
            <span className="inline-block rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-600">
              {displayCategory}
            </span>
          )}

          {/* Title Header */}
          <h1 className="mt-3 text-xl font-bold tracking-tight leading-snug text-slate-900 sm:text-2xl lg:text-3xl">
            {article.title}
          </h1>

          {/* Metadata Block & Small Context */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md">
                {article.source_name}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={13} className="text-slate-400" />
                {formatDate(article.pubDate)}
              </span>
            </div>
          </div>

          {/* Responsive Image Frame with Max Height Limits */}
          {article.image_url && (
            <div className="mt-5 overflow-hidden rounded-xl border border-slate-100 shadow-2xs">
              <img
                src={article.image_url}
                alt={article.title}
                className="max-h-[340px] w-full object-cover"
              />
            </div>
          )}

          {/* Body Prose Container */}
          <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-loose">
            {article.content || article.description}
          </p>

          {/* Actions Footer Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
            <Button
              size="sm"
              onClick={() => window.open(article.link, "_blank", "noopener,noreferrer")}
              className="text-xs font-semibold tracking-wide shadow-xs bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-1.5"
            >
              <span>Read Original Source</span>
              <ExternalLink size={14} className="stroke-[2.25]" />
            </Button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleBookmark(article)}
                aria-label={saved ? "Remove bookmark" : "Save article"}
                className={clsx(
                  "flex h-9 w-9 items-center justify-center rounded-lg border text-slate-600 transition-all",
                  saved 
                    ? "border-blue-200 bg-blue-50/80 text-blue-600 shadow-2xs" 
                    : "border-slate-200 bg-white hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <Bookmark size={15} className="stroke-[2.25]" fill={saved ? "currentColor" : "none"} />
              </button>

              <button
                onClick={handleShare}
                aria-label="Share article"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                <Share2 size={15} className="stroke-[2.25]" />
              </button>
            </div>
          </div>

        </article>
      </Container>
    </div>
  );
};

export default Details;