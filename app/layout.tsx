import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikita Kumari — Full Stack Developer & ML Researcher",
  description: "Portfolio of Nikita Kumari, a CS Engineering student from Quantum University, Roorkee. Full Stack Developer, ML Researcher, and IEEE published author.",
  keywords: ["Nikita Kumari", "Portfolio", "Full Stack Developer", "ML Engineer", "React", "Next.js"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
