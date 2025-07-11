import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Link from "next/link";

/* import { useRouter } from "next/navigation"; */
import React from "react";

interface featureProps {
  title: string;
  description: string;
  icon: string;
}

const features: featureProps[] = [
  {
    title: "Interactive Learning",
    description:
      "Engage with interactive content that makes learning fun and effective.",
    icon: "🎉",
  },
  {
    title: "Personalized Learning Paths",
    description:
      "Tailor your learning experience with personalized learning paths that align with your goals.",
    icon: "📚",
  },
  {
    title: "Community Support",
    description:
      "Join a vibrant community of learners and educators for support and collaboration.",
    icon: "🤝",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Learn at your own pace with flexible scheduling options that fit your lifestyle.",
    icon: "⏰",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center justify-center space-y-8">
          <Badge className="" variant={"outline"}>
            The Future of Online Education
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Evaluate your experience
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Discover new way to learn with our modern platform, interactive
            management system, and personalized learning paths. Join us today
            and take your education to the next level!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link className={buttonVariants({ size: "lg" })} href={"/courses"}>
              Explore Courses
            </Link>
            <Link className={buttonVariants({ size: "lg" })} href={"/login"}>
              Sign In
            </Link>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        {features.map((features, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-4xl mb-4">{features.icon}</div>
              <CardTitle>{features.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{features.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}
