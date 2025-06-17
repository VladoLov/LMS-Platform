import { buttonVariants } from "@/components/ui/button";
import { Arrow } from "@radix-ui/react-select";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center bg-gray-100 p-6">
      <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          className: "absolute top-4 left-4",
        })}
      >
        <ArrowLeft className="size-4" />
        Back
        <span className="sr-only">Back to home</span>
      </Link>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href={"/"}
          className="text-2xl font-bold flex items-center justify-center gap-2"
        >
          <Image src={"/logo.jpg"} alt="Logo" width={32} height={32} />
          Naxx LMS
        </Link>
        {children}
        <div className="">
          <p className="text-balance text-center text-xs text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <span className="hover:text-primary underline cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="hover:text-primary underline cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>{" "}
        </div>
      </div>
      ;
    </div>
  );
}
