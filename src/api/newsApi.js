import api from "./axios";

export const getNews = async ({
  country = "all",
  language = "en",
  category,
  query,
  nextPage,
} = {}) => {
  const { data } = await api.get("/news/latest", {
    params: {
      country,
      language,
      category,
      query,
      page: nextPage,
    },
  });

  return data;
};