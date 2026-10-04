import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Kaushik Sridhar | Software Engineer",
  description:
    "Portfolio of Kaushik Sridhar, software engineer. B.Tech in Computer Science and Engineering from VIT Chennai, building backend and full-stack applications with Java, Spring Boot, TypeScript and SQL.",
  authors: [{ name: "Kaushik Sridhar" }],
  icons: { icon: `${basePath}/favicon.svg` },
  openGraph: {
    title: "Kaushik Sridhar | Software Engineer",
    description: "Backend and full-stack projects in Java, Spring Boot, TypeScript and PostgreSQL.",
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
