"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useSignOut() {
  const router = useRouter();
  const handleSignOut = async function signout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          toast.success("Successfully logged out!");
        },
        onError: (error) => {
          toast.error(`Failed to log out: ${error.error.message}`);
        },
      },
    });
  };
  return handleSignOut;
}
