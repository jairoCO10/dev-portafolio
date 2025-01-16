"use client";

import { useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArticleModal } from "@/components/blog/article-modal";
import type { Article } from "@/lib/api/blog";

interface BlogPostProps {
  article: Article;
}

export function BlogPost({ article }: BlogPostProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formattedDate = format(new Date(article.publication_date), 'MMM dd, yyyy');

  return (
    <>
      <Card 
        className="flex flex-col transition-all duration-300 hover:shadow-lg cursor-pointer" 
        onClick={() => setIsModalOpen(true)}
      >
        {article.image_url && (
          <div className="relative w-full h-48">
            <Image
              src={article.image_url}
              alt={article.title}
              fill
              className="object-cover rounded-t-lg"
              loading="lazy"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="line-clamp-2">{article.title}</CardTitle>
          <CardDescription className="line-clamp-2">{article.content}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{formattedDate}</span>
            <span>{article.author}</span>
          </div>
        </CardContent>
      </Card>

      <ArticleModal 
        article={article}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}