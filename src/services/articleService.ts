// src/services/articleService.ts

import axios from "axios";
import type { Article } from "../types/article";

interface ArticlesHttpResponse {
  hits: Article[];
}
const apiKey = import.meta.env.VITE_API_KEY;
// HTTP-функція запиту статей
export const fetchArticles = async (topic: string): Promise<Article[]> => {
  const response = await axios.get<ArticlesHttpResponse>(
    `${apiKey}${topic}`
  );
  return response.data.hits;
};
