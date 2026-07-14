import { useNavigate } from "react-router-dom";
import {
  Landmark,
  Cpu,
  Trophy,
  Clapperboard,
  HeartPulse,
  FlaskConical,
  Globe2,
  Gavel,
  Newspaper,
  Flame,
  ShieldAlert,
  Home,
  GraduationCap,
  Leaf,
  Sparkles,
  UtensilsCrossed,
  Compass
} from "lucide-react";

import Container from "../../common/Container/Container";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import CATEGORIES from "../../../constants/categories";

const ICONS = {
  top: Newspaper,
  business: Landmark,
  technology: Cpu,
  sports: Trophy,
  entertainment: Clapperboard,
  health: HeartPulse,
  science: FlaskConical,
  world: Globe2,
  politics: Gavel,
  breaking: Flame,
  crime: ShieldAlert,
  domestic: Home,
  education: GraduationCap,
  environment: Leaf,
  lifestyle: Sparkles,
  food: UtensilsCrossed,
  tourism: Compass
};

const CategorySection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 bg-slate-50/40">
      <Container>
        <SectionTitle
          title="Browse by Category"
          subtitle="Jump straight to the topics you care about"
        />

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {CATEGORIES.map((category) => {
            const Icon = ICONS[category] || Newspaper;

            return (
              <button
                key={category}
                onClick={() => navigate(`/category/${category}`)}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200/70 bg-white p-4 text-center transition-all duration-200 hover:border-blue-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] outline-none"
              >
                {/* Micro-animated icon badge wrapper */}
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform duration-200 group-hover:scale-105">
                  <Icon size={18} className="stroke-[2.25]" />
                </span>

                {/* Typography formatting refinement */}
                <span className="text-xs font-semibold tracking-wide capitalize text-slate-700 transition-colors group-hover:text-slate-900">
                  {category === "top" ? "All News" : category}
                </span>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;