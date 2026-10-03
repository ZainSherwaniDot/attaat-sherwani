import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Attaat Sherwani",
  description: "37 Years Commercial Leadership | 27 Years in IT Distribution",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}
