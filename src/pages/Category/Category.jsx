import { useNavigate, useParams } from "react-router-dom";

import Container from "../../components/common/Container/Container";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";
import FilterDrawer from "../../components/news/FilterDrawer/FilterDrawer";
import NewsResults from "../../components/news/NewsResults/NewsResults";
import useInfiniteNews from "../../hooks/useInfiniteNews";

const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const newsQuery = useInfiniteNews({
    category: category === "top" ? undefined : category,
  });

  return (
    <div className="pb-8">
      <Container>
        <SectionTitle
          title={`${category[0].toUpperCase()}${category.slice(1)} News`}
          subtitle={`Headlines curated for the ${category} category`}
        />

        <FilterDrawer
          activeCategory={category}
          onChange={(next) => navigate(`/category/${next}`)}
        />

        <div className="mt-8">
          <NewsResults
            newsQuery={newsQuery}
            emptyTitle="No stories in this category yet"
            emptyMessage="Try another category or check back later."
          />
        </div>
      </Container>
    </div>
  );
};

export default Category;
