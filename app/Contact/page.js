'use client'

import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <h1>this is contact page</h1>
      <button type="button"
        onClick={()=>router.push("/")}
        className="py-2 px-3 bg-teal-500 rounded-md font-lg text-white font-semibold"
      >
        Back to home page
      </button>
    </div>
  );
};

export default page;
