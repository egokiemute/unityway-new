"use client";

import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

interface BlogCardProps {
  slug: string;
  image: string;
  category: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  image,
  category,
  title,
  description,
}) => {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`${slug}`);
  };

  return (
    <div className="flex flex-col font-twk">
      {/* Image */}
      <div className="relative h-[258px] w-full overflow-hidden rounded-lg">
        <Image src={image} alt={title} fill className="object-cover" />

        <div className="absolute top-7 left-4">
          <span className="px-2 py-2 text-[10px] rounded-full bg-primary-100 text-white font-twk">
            {category}
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold leading-snug">{title}</h3>
        <p className="mt-2 mb-3 text-gray-600 text-sm leading-relaxed">
          {description}
        </p>

        <Button
          type="button"
          style="primary"
          className="px-4 py-3 text-[14px] !text-white"
          iconPosition="right"
          onClick={handleReadMore}
        >
          Book Care
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
