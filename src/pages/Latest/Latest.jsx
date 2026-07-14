import { useState } from "react";

import Container from "../../components/common/Container/Container";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";
import FilterDrawer from "../../components/news/FilterDrawer/FilterDrawer";
import NewsResults from "../../components/news/NewsResults/NewsResults";
import useInfiniteNews from "../../hooks/useInfiniteNews";

const Latest = () => {
  const [category, setCategory] = useState("top");

  const newsQuery = useInfiniteNews({
    category: category === "top" ? undefined : category,
  });

  return (
    <div className="pb-8">
      <Container>
        <SectionTitle
          title="Latest News"
          subtitle="Fresh headlines from around the world"
        />

        <FilterDrawer
          activeCategory={category}
          onChange={setCategory}
        />

        <div className="mt-8">
          <NewsResults newsQuery={newsQuery} />
        </div>
      </Container>
    </div>
  );
};

export default Latest;
