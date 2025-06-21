import React from "react";
import FeaturedPostCard from "../blocks/featured-post-card";

const FeaturedPosts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-2.5">
          <h6 className="text-sm font-bold text-primary">Practice Advice</h6>
          <h2 className="text-4xl font-bold">Featured Posts</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 gap-2.5 max-w-5xl mx-auto">
          {[...Array(3)].map((_, index) => (
            <FeaturedPostCard
              image={`/assets/featured-post-${index + 1}.jpg`}
              key={`featured-post-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
