// utils/blog.ts

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  image: string; // 👈 BlogCard thumbnail
  description: string;
};

export const BLOGS: BlogPost[] = Array.from({ length: 9 }).map((_, i) => ({
  slug: `/from-freemium-to-enterprise`,
  title: `From Freemium to Enterprise: How to Price SaaS at Every Stage (Part ${i + 1})`,
  date: "September 11, 2025",
  category: "Enterprise Billing",
  image: `/images/blog-thumb.jpg`,
  description:
    "Modern billing affects product velocity, user experience, and revenue retention. Here’s how to rethink your stack.",
}));
