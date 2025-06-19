import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";
import { env } from "./env";
import { emailOTP } from "better-auth/plugins";
import { resend } from "@/app/api/send/route";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc}
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_CLIENT_ID, // Replace with your GitHub client ID
      clientSecret: env.AUTH_GITHUB_CLIENT_SECRET, // Replace with your GitHub client secret
    },
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        // Implement the sendVerificationOTP method to send the OTP to the user's email address
        await resend.emails.send({
          from: "Acme <onboarding@resend.dev>",
          to: [email],
          subject: "LMS Platform - Email Verification",
          html: `<p>Use the following OTP to verify your email: <strong>${otp}</strong></p>`,
        });
      },
    }),
  ],
});
