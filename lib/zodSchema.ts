import { z } from "zod";

export const courseLevel = ["Beginner", "Intermediate", "Advanced"] as const;
export const courseStatus = ["Daft", "Publish", "Archived"] as const;
export const courseCategory = [
  "Development",
  "Business",
  "IT & Software",
  "Design",
  "Office Productivity",
  "Personal Development",
  "Marketing",
  "Health & Fitness",
  "Music",
  "Teaching & Academics",
] as const;
export const courseSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(100, { message: "Title must be at most 100 characters long" }),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters long" }),
  fileKey: z.string().min(1, { message: "File is required" }),
  price: z.coerce.number().min(1, { message: "Price must be positive number" }),
  duration: z.coerce
    .number()
    .min(1, { message: "Duration must be at least 1 hour" })
    .max(500, { message: "Duration must be at most 500 hour" }),
  level: z.enum(courseLevel, { message: "Level is required" }),
  category: z.enum(courseCategory, { message: "Category is required" }),
  smallDescription: z
    .string()
    .min(3, { message: "Small Description must be at least 3 characters long" })
    .max(200, {
      message: "Small Description must be at most 200 characters long",
    }),
  slug: z
    .string()
    .min(3, { message: "Slug must be at least 3 characters long" }),
  status: z.enum(courseStatus, { message: "Status is required" }),
});

export type CourseSchemaType = z.infer<typeof courseSchema>;
