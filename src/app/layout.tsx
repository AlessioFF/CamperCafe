import type { Metadata } from "next";
import { Footer } from "@/components/react/Footer";

export const metadata: Metadata = {
  title: "Cafe Menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
