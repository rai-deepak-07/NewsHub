import { useNavigate } from "react-router-dom";
import { TrendingUp } from "lucide-react";

import Container from "../../common/Container/Container";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import truncateText from "../../../utils/truncateText";

const TrendingNews = ({ articles = [] }) => {
  const navigate = useNavigate();

  if (!articles.length) return null;

  return (
    <section>
      <Container>
        <SectionTitle
          title="Trending Now"
          subtitle="What readers are engaging with most"
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => (
            <button
              key={article.article_id}
              onClick={() =>
                navigate(`/news/${article.article_id}`, {
                  state: { article },
                })
              }
              className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-blue-200 hover:shadow-md"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-600">
                {index + 1}
              </span>

              <div className="min-w-0">
                <h3 className="line-clamp-2 text-sm font-semibold text-slate-900 group-hover:text-blue-600">
                  {article.title}
                </h3>

                <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                  <TrendingUp size={12} />
                  {truncateText(article.source_name, 30)}
                </p>
              </div>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrendingNews;
