"use client";

import Image from "next/image";
import { format } from "date-fns";
import { Share2, Link2 } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import type { Article } from "@/lib/api/blog";

interface ArticleModalProps {
  article: Article;
  isOpen: boolean;
  onClose: () => void;
}

export function ArticleModal({ article, isOpen, onClose }: ArticleModalProps) {
  const formattedDate = format(new Date(article.publication_date), 'MMMM dd, yyyy');

  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.content,
        url: article.related_links[0] || window.location.href,
      });
    }
  };

  const paragraphs = article.content.split('\n\n').filter(p => p.trim());

  return (
    <Modal title={article.title} isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6 max-h-[80vh] overflow-y-auto">
        {article.image_url && (
          <div className="relative w-full h-64">
            <Image
              src={article.image_url}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">{article.author}</p>
            <p className="text-xs text-muted-foreground">{formattedDate}</p>
          </div>
          
          <div className="flex gap-2">
            {article.related_links[0] && (
              <Button variant="ghost" size="icon" asChild>
                <a href={article.related_links[0]} target="_blank" rel="noopener noreferrer">
                  <Link2 className="h-4 w-4" />
                </a>
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={shareArticle}>
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4 whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Modal>
  );
}