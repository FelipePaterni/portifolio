import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dev Journey Showcase',
  description: 'Portfolio showcasing projects, skills, and experience',
  keywords: ['portfolio', 'developer', 'projects', 'skills'],
  authors: [{ name: 'Your Name' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      {children}
      </body>
    </html>
  );
}
