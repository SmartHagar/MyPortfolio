/** @format */
import Profile from "@/components/pages/Profile";
import "./globals.css";
import Nav from "@/components/navbar/Nav";

export const metadata = {
  title: "Smart Tamalonggehe",
  description: "Portfolio Smart Tamalonggehe",
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
        <div className="lg:flex bg-black-100 text-body">
          <div className="fixed flex justify-center w-full lg:w-auto">
            <Nav />
          </div>
          <div className="flex-1 px-10 lg:pl-48 lg:mr-80 lg:pr-4">
            {children}
          </div>
          <div className="hidden xl:block xl:fixed lg:right-0 lg:w-80 lg:h-screen lg:bg-black-200">
            <Profile />
          </div>
        </div>
      </body>
    </html>
  );
}
