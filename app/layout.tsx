import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Twenty seconds between attempts',
  description: 'Ten seconds in, ten remain. Ready does not mean a swap is sent.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
