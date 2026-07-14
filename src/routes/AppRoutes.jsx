import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout/MainLayout";

import Home from "../pages/Home/Home";
import Latest from "../pages/Latest/Latest";
import Search from "../pages/Search/Search";
import Category from "../pages/Category/Category";
import Details from "../pages/Details/Details";
import Bookmarks from "../pages/Bookmarks/Bookmarks";
import NotFound from "../pages/NotFound/NotFound";

import ROUTES from "../constants/routes";
import ScrollToTop from "../components/common/ScrollToTop";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LATEST} element={<Latest />} />
          <Route path={ROUTES.SEARCH} element={<Search />} />
          <Route path={ROUTES.CATEGORY} element={<Category />} />
          <Route path={ROUTES.DETAILS} element={<Details />} />
          <Route path={ROUTES.BOOKMARKS} element={<Bookmarks />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
