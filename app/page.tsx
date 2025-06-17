"use client";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

import { authClient } from "@/lib/auth-client";

export default function Home() {
  const { data: session } = authClient.useSession();
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world! // </h1>
      <ThemeToggle />
      {session ? <p>{session.user.name}</p> : <Button>Login</Button>}
    </div>
  );
}
