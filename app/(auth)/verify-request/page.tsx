"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { authClient } from "@/lib/auth-client";
import { Loader2, Send } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

import { toast } from "sonner";

export default function VerifyRequest() {
  const [otp, setOtp] = useState("");
  const [emailPending, startTransition] = useTransition();
  const isOtpCompleted = otp.length === 6;
  const params = useSearchParams();
  const email = params.get("email") as string;
  const router = useRouter();

  function verifyAccount() {
    startTransition(async () => {
      await authClient.signIn.emailOtp({
        email: email,
        otp: otp,
        fetchOptions: {
          onSuccess: () => {
            // Redirect to home page or dashboard after successful verification
            toast.success("Account verified successfully!");
            router.push("/");
          },
          onError: (error) => {
            toast.error(`Failed to verify account: ${error.error.message}`);
            // Log the error for debugging purposes

            // Optionally, you can show an error message to the user
          },
        },
      });
    });
  }

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Please check your email </CardTitle>
        <CardDescription>We have sent you a verification email</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <InputOTP
            maxLength={6}
            className="gap-2"
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-sm text-muted-foreground">
            Enter 6 digit code sent to your email
          </p>
        </div>
        <Button
          className="w-full"
          onClick={verifyAccount}
          disabled={emailPending || !isOtpCompleted}
        >
          {emailPending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Verifying...
            </>
          ) : (
            <>
              <Send className="size-4" />
              Verify Account
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
