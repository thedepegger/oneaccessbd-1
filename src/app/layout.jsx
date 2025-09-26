import "./globals.css";

export const metadata = {
  title: "One Access BD",
  description: "Landing page built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-scheme-background text-scheme-text">
        {children}
      </body>
    </html>
  );
}
