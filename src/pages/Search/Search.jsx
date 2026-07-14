import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search as SearchIcon, SearchX, X } from "lucide-react";

import Container from "../../components/common/Container/Container";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";
import Input from "../../components/common/Input/Input";
import NewsResults from "../../components/news/NewsResults/NewsResults";
import EmptyState from "../../components/common/EmptyState/EmptyState";
import useInfiniteNews from "../../hooks/useInfiniteNews";
import useDebounce from "../../hooks/useDebounce";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [term, setTerm] = useState(searchParams.get("q") || "");
  const debouncedTerm = useDebounce(term, 500);

  useEffect(() => {
    setSearchParams(debouncedTerm ? { q: debouncedTerm } : {}, {
      replace: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedTerm]);

  const newsQuery = useInfiniteNews({
    query: debouncedTerm || undefined,
    enabled: Boolean(debouncedTerm),
  });

  return (
    <div className="pb-8 lg:h-screen">
      <Container>
        <SectionTitle
          title="Search"
          subtitle="Find articles by keyword, topic, or source"
        />

        <Input
          icon={SearchIcon}
          autoFocus
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search news, topics, sources..."
          containerClassName="mb-8 max-w-xl"
          trailing={
            term && (
              <button
                type="button"
                onClick={() => setTerm("")}
                aria-label="Clear search"
                className="flex h-6 w-6 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                <X size={14} />
              </button>
            )
          }
        />

        {!debouncedTerm ? (
          <EmptyState
            icon={SearchX}
            title="Start typing to search"
            message="Try keywords like a topic, company, or location."
          />
        ) : (
          <NewsResults
            newsQuery={newsQuery}
            emptyTitle="No results found"
            emptyMessage={`We couldn't find anything for "${debouncedTerm}".`}
          />
        )}
      </Container>
    </div>
  );
};

export default Search;
