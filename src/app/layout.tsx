/** @format */
import Profile from "@/components/pages/Profile";
import "./globals.css";
import Nav from "@/components/navbar/Nav";

export const metadata = {
  title: "Smart Tamalonggehe",
  description: "Portfolio Smart Tamalonggehe",
  keywords: [
    "pemrograman",
    "website",
    "php",
    "laravel",
    "reactjs",
    "nextjs",
    "tailwindcss",
    "css",
    "html",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-track-[#1B1B2B] scrollbar-thumb-primary scrollbar-thumb-rounded-xl"
    >
      <body>
        <div className="bg-black-100 text-body min-h-screen">{children}</div>
      </body>
    </html>
  );
}
