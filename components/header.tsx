"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Terminal, Github, Linkedin, X } from 'lucide-react';

export function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-center">
        <div className=" flex ml-4">
         <nav>
         <Link href="/" className="flex items-center space-x-2">
            <Terminal className="h-6 w-6" />
            <span className="font-mono font-bold">Jairo Cogollo</span>
          </Link>
         </nav>
        </div>
        <nav className="flex flex-1 items-center justify-center space-x-6 text-sm">
          <Link href="/projects" className="transition hover:text-foreground/80">Projects</Link>
          <Link href="/expertise" className="transition hover:text-foreground/80">Expertise</Link>
          <Link href="/blog" className="transition hover:text-foreground/80">Blog</Link>
          <Link href="/contact" className="transition hover:text-foreground/80">Contact</Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <nav className="flex flex-1 items-center justify-center space-x-6 text-sm">
          <Github href="https://github.com/jairoco10"
            target="_blank"
            className="transition hover:text-foreground/80"
          >
          </Github>
          <Linkedin
            href="https://www.linkedin.com/in/jairo-cogollo/"
            target="_blank"
            className="transition hover:text-foreground/80"
          >
          </Linkedin>
          <X
            href="https://twitter.com/JairoCO10"
            target="_blank"
            className="transition hover:text-foreground/80"
          >

          </X>
        </nav>
      </div>
    </header>
  );
}