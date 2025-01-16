"use client";

import Script from 'next/script';

export function Analytics() {
  return (
    <Script
      defer
      data-domain="yourdomain.com"
      src="https://plausible.io/js/script.js"
    />
  );
}