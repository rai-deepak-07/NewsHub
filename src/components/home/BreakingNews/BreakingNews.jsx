import { Flame } from "lucide-react";
import Container from "../../common/Container/Container";

const BreakingNews = ({ articles = [] }) => {
  if (!articles.length) return null;

  // Duplicate the array to ensure seamless looping without blanks
  const doubleArticles = [...articles, ...articles];

  return (
    <section className="py-2.5">
      <Container>
        {/* Style block to inject the keyframes natively without tailwind config updates */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marqueeLoop {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .custom-marquee-track {
            display: flex;
            white-space: nowrap;
            animation: marqueeLoop 40s linear infinite;
          }
          .custom-marquee-track:hover {
            animation-play-state: paused;
          }
        `}} />

        <div className="relative flex items-center overflow-hidden rounded-xl border border-red-100/80 bg-red-50/30 p-1 pr-4 shadow-[0_2px_12px_rgba(239,68,68,0.03)] backdrop-blur-xs">
          
          {/* Static Premium Alert Badge */}
          <div className="relative z-10 flex shrink-0 items-center gap-1.5 rounded-lg bg-red-600 px-3 py-1.5 text-[10px] font-bold tracking-wider text-white shadow-xs">
            <Flame size={12} className="fill-white stroke-none animate-pulse" />
            <span>BREAKING</span>
          </div>

          {/* Scrolling Window Wrapper */}
          <div className="relative flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20px,white_90%,transparent)]">
            <div className="custom-marquee-track items-center cursor-pointer">
              {doubleArticles.map((article, index) => (
                <a
                  key={`${article.article_id}-${index}`}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-4 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-700 transition-colors duration-200 hover:text-red-600"
                >
                  <span className="text-red-400 select-none font-bold">/</span>
                  {article.title}
                </a>
              ))}
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
};

export default BreakingNews;