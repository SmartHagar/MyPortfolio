/** @format */
"use client";
import AdminNav from "@/components/navbar/AdminNav";
import CekAuth from "@/utils/Auth";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  // loading
  const [isLoading, setIsLoading] = useState(true);

  const fetchAuth = async () => {
    const cekAuth = await CekAuth();
    if (!cekAuth) {
      // redirect to login
      router.push("/login");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchAuth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div>
      {isLoading ? (
        <div className="h-screen w-screen flex justify-center items-center">
          Loading...
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-hidden w-screen">
          <div>
            <AdminNav />
          </div>
          <div className="w-full overflow-x-hidden">{children}</div>
        </div>
      )}
    </div>
  );
}

export default Layout;
