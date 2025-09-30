import "./globals.css";

export const metadata = {
  title: "One Access BD",
  description: "Landing page built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-website-id="68dc56cbe6e445462fa86c48"
          data-domain="oneaccessbd.com"
          src="https://datafa.st/js/script.js"
        ></script>
      </head>
      <body className="min-h-screen bg-scheme-background text-scheme-text">
        {children}
      </body>
    </html>
  );
}
