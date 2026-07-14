import api from "./axios";

const API_KEYS = [
  import.meta.env.VITE_NEWS_API_KEY,
  // import.meta.env.VITE_NEWS_API_KEY_2,
];

export const getNews = async ({
  country = "all",
  language = "en",
  category,
  query,
  nextPage,
} = {}) => {
  const buildParams = (apiKey) => {
    const params = {
      apikey: apiKey,
      language,
    };

    if (country && country !== "all") {
      params.country = country;
    }

    if (category) {
      params.category = category;
    }

    if (query) {
      params.q = query;
    }

    if (nextPage) {
      params.page = nextPage;
    }

    return params;
  };

  let lastError;

  for (const apiKey of API_KEYS) {
    try {
      const { data } = await api.get("/latest", {
        params: buildParams(apiKey),
      });

      return data;
    } catch (error) {
      lastError = error;

      const status = error?.response?.status;
      const message =
        error?.response?.data?.results?.message ||
        error?.response?.data?.message ||
        "";

      const limitExceeded =
        status === 429 ||
        message.toLowerCase().includes("limit") ||
        message.toLowerCase().includes("quota") ||
        message.toLowerCase().includes("credit");

      if (!limitExceeded) {
        throw error;
      }

      console.warn(`API key failed due to quota. Trying next key...`);
    }
  }

  throw lastError;
};