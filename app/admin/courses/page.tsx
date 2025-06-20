import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Courses() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Courses</h1>
        <Link href={"/admin/courses/create"} className={buttonVariants({})}>
          Your Courses
        </Link>
      </div>
      <div className="">
        <h1>Here you will see all of the courses</h1>
      </div>
    </>
  );
}
