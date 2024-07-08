import { IconLeft } from "@/components/icons";
import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-red-500 text-5xl">404</h1>
      <h2 className="mt-5 mb-5 font-semibold">Page not found</h2>
      <Link
        href="/"
        className="text-blue-500 underline flex items-center gap-2 hover:text-blue-800"
      >
        <IconLeft className="size-5" />
        Trang chủ
      </Link>
    </div>
  );
};

export default PageNotFound;
