import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Kaushik Sridhar | Software Engineer",
  description:
    "Portfolio of Kaushik Sridhar, a Computer Science graduate from VIT Chennai who builds full-stack web applications in Java and TypeScript, with project experience in machine learning.",
  authors: [{ name: "Kaushik Sridhar" }],
  icons: { icon: `${basePath}/favicon.svg` },
  openGraph: {
    title: "Kaushik Sridhar | Software Engineer",
    description: "Full-stack and machine learning projects by Kaushik Sridhar, Computer Science graduate.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
