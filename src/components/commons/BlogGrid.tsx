import React from "react";
import BlogCard from "../commons/BlogCard";
import { SERVICES } from "@/utils/services";

const BlogGrid: React.FC = () => {
  return (
    <section className="mt-[10px]">
      <div className="mt-[86px] mx-[30px] grid grid-cols-1 md:grid-cols-3 gap-x-[63px] gap-y-[86px]">
        {SERVICES.map((service) => (
          <BlogCard
            key={service.slug}
            slug={service.slug}
            image={service.image}
            category={service.category}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;
