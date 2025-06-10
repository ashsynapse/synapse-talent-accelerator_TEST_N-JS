import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Synapse',
    default: 'Synapse | AI-Powered Recruitment Platform',
  },
  description: 'Global AI-powered recruitment platform automating the entire hiring lifecycle — from job intake to offer. Blending artificial intelligence with expert recruiters.',
  authors: [{ name: 'Synapse Recruitment' }],
  openGraph: {
    title: 'Synapse | AI-Powered Recruitment Platform',
    description: 'Global AI-powered recruitment platform automating the entire hiring lifecycle — from job intake to offer.',
    type: 'website',
    images: ['/lovable-uploads/4e0b1cf8-ab85-4f55-a3fb-5f39206731ef.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@synapse_recruit',
    images: ['/lovable-uploads/4e0b1cf8-ab85-4f55-a3fb-5f39206731ef.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/lovable-uploads/4e0b1cf8-ab85-4f55-a3fb-5f39206731ef.png" type="image/png" />
      </head>
      <body className="font-inter">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
        <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
      </body>
    </html>
  );
}