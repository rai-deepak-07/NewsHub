import { useNavigate } from "react-router-dom";
import { Bookmark, Clock3, ExternalLink, Share2 } from "lucide-react";
import clsx from "clsx";

import Container from "../../common/Container/Container";
import formatDate from "../../../utils/formatDate";
import { useBookmarks } from "../../../context/BookmarkContext";

const Hero = ({ article }) => {
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks();

  if (!article) return null;

  const saved = isBookmarked(article.article_id);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          url: article.link,
        });
      } catch {
        // user cancelled share — no-op
      }
    } else if (article.link) {
      await navigator.clipboard.writeText(article.link);
    }
  };

  return (
    <section className="pb-6">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
          {/* Main Grid: Enforces a strict max height constraint on laptop screens to prevent viewport takeover */}
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:max-h-[520px] xl:max-h-[580px]">
            
            {/* Image Container */}
            <div
              className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden bg-slate-100 sm:aspect-[16/9] lg:col-span-6 lg:aspect-auto lg:h-full"
              onClick={() =>
                navigate(`/news/${article.article_id}`, {
                  state: { article },
                })
              }
            >
              <img
                src={
                  article.image_url ||
                  "https://placehold.co/800x600?text=News"
                }
                alt={article.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-102"
              />

              <span className="absolute left-4 top-4 rounded-full bg-red-600/95 px-3 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-xs shadow-xs">
                🔥 Featured Story
              </span>
            </div>

            {/* Content Container */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-6 lg:p-10 xl:p-12">
              <div className="space-y-3">
                {/* Category tag */}
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600">
                  {article.category?.[0] || "General"}
                </span>

                {/* Title: Scaled down line-height and size for balanced screen estate */}
                <h1 className="line-clamp-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl xl:text-4xl xl:leading-tight">
                  {article.title}
                </h1>

                {/* Description: Truncated safely to stay tidy across all dynamic devices */}
                <p className="line-clamp-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {article.description}
                </p>
              </div>

              {/* Meta information & CTA footer actions */}
              <div className="mt-6 space-y-4 pt-4 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                  <span className="font-medium text-slate-700">{article.source_name}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300 hidden sm:inline-block" />
                  <span className="flex items-center gap-1">
                    <Clock3 size={14} className="text-slate-400" />
                    {formatDate(article.pubDate)}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() =>
                      window.open(article.link, "_blank", "noopener,noreferrer")
                    }
                    className="flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:bg-blue-700 active:scale-98"
                  >
                    Read Full Story
                    <ExternalLink size={16} />
                  </button>

                  <button
                    onClick={() => toggleBookmark(article)}
                    aria-label={saved ? "Remove bookmark" : "Save article"}
                    className={clsx(
                      "rounded-xl border border-slate-200 p-2.5 transition hover:bg-slate-50 active:scale-95",
                      saved && "border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100"
                    )}
                  >
                    <Bookmark size={20} fill={saved ? "currentColor" : "none"} />
                  </button>

                  <button
                    onClick={handleShare}
                    aria-label="Share article"
                    className="rounded-xl border border-slate-200 p-2.5 transition hover:bg-slate-50 active:scale-95"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;