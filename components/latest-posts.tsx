"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BlogPost } from "@/components/blog/blog-post";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getArticles } from "@/lib/api/blog";
import type { Article } from "@/lib/api/blog";

export function LatestPosts() {
  const [state, setState] = useState<{
    articles: Article[];
    isLoading: boolean;
    error: string | null;
  }>({
    articles: [],
    isLoading: true,
    error: null
  });

  useEffect(() => {
    let mounted = true;

    async function loadArticles() {
      try {
        const data = await getArticles();
        if (mounted) {
          setState(prev => ({ ...prev, articles: data, isLoading: false }));
        }
      } catch (err) {
        if (mounted) {
          setState(prev => ({
            ...prev,
            error: err instanceof Error ? err.message : 'Failed to load articles',
            isLoading: false
          }));
        }
      }
    }

    loadArticles();

    return () => {
      mounted = false;
    };
  }, []);

  if (state.isLoading) {
    return (
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-64 bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      </Container>
    );
  }

  if (state.error) {
    return (
      <Container>
        <div className="text-center py-12">
          <p className="text-lg text-destructive mb-4">{state.error}</p>
          <Button 
            onClick={() => setState(prev => ({ ...prev, isLoading: true, error: null }))}
          >
            Try Again
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <section className="py-12">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
            View all posts →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {state.articles.map((article) => (
            <BlogPost key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}