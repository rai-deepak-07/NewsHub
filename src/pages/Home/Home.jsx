import Hero from "../../components/home/Hero/Hero";
import BreakingNews from "../../components/home/BreakingNews/BreakingNews";
import TrendingNews from "../../components/home/TrendingNews/TrendingNews";
import LatestSection from "../../components/home/LatestSection/LatestSection";
import CategorySection from "../../components/home/CategorySection/CategorySection";

import useHomeNews from "../../hooks/useHomeNews";

const Home = () => {
  const news = useHomeNews();

  return (
    <div className="space-y-10 pb-10">
      <Hero article={news.featured} />

      <BreakingNews articles={news.breaking} />

      <TrendingNews articles={news.trending} />

      <LatestSection
        newsQuery={news}
        articles={news.latest}
      />

      <CategorySection />
    </div>
  );
};

export default Home;