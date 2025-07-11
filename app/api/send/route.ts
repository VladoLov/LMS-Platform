import { EmailTemplate } from "@/components/sidebar/email-template";
import { env } from "@/lib/env";
import { Resend } from "resend";

export const resend = new Resend(env.RESEND_API_KEY);
