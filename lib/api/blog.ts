import { z } from "zod";

// API response validation schema
export const ArticleSchema = z.object({
  id: z.number(),
  title: z.string(),
  image_url: z.string().optional(),
  content: z.string(),
  publication_date: z.string(),
  author: z.string(),
  related_links: z.array(z.string()),
});

export type Article = z.infer<typeof ArticleSchema>;

const API_URL = 'http://127.0.0.1:8000';

export async function getArticles(): Promise<Article[]> {
  try {
    const response = await fetch(`${API_URL}/articles`, {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store' // Disable caching for development
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.map((article: unknown) => ArticleSchema.parse(article));
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw new Error('Failed to load articles. Please try again later.');
  }
}

export async function getArticle(id: number): Promise<Article> {
  try {
    const response = await fetch(`${API_URL}/articles/${id}`, {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return ArticleSchema.parse(data);
  } catch (error) {
    console.error('Error fetching article:', error);
    throw new Error('Failed to load article. Please try again later.');
  }
}