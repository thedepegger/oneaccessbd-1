import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://oneaccessbd.com"),
  title: {
    default: "One Access BD",
    template: "%s | One Access BD",
  },
  description: "One Access BD official site.",
  openGraph: {
    title: "One Access BD",
    description: "One Access BD official site.",
    url: "https://oneaccessbd.com",
    siteName: "One Access BD",
    images: [
      {
        url: "/assets/banner/preview.png",
        width: 1200,
        height: 630,
        alt: "One Access BD preview banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Access BD",
    description: "One Access BD official site.",
    images: ["/assets/banner/preview.png"],
  },
  icons: {
    icon: "/assets/icons/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-website-id="68dc56cbe6e445462fa86c48"
          data-domain="oneaccessbd.com"
          src="https://datafa.st/js/script.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');twq('config','qks4c');",
          }}
        />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
