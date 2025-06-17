"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { Github, Loader } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

export default function LoginForm() {
  const [githubPending, setGithubPending] = useTransition();
  async function signWithGithub() {
    setGithubPending(async () => {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Successfully logged in with Github!");
          },
          onError: (error) => {
            toast.error(`Failed to login with Github: ${error.error.message}`);
          },
        },
      });
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Welcome Back!</CardTitle>
        <CardDescription>Login with your Github Email Account</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button
          className="w-full"
          variant="outline"
          onClick={signWithGithub}
          disabled={githubPending}
        >
          {githubPending ? (
            <>
              <Loader className="mr-2 h-4 w-4 animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            <>
              <Github className=" h-4 w-4" />
              Sign up with Github
            </>
          )}
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-card px-4 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="example@example.com" />
          </div>
          <Button>Continue with Email</Button>
        </div>
      </CardContent>
    </Card>
  );
}
