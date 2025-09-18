/**
 * Blog Section Component
 * 
 * A content section that showcases blog posts and provides instructor discovery features.
 * This component is part of the landing page and serves dual purposes:
 * 1. Instructor finder functionality (hidden on mobile)
 * 2. Blog content showcase with multiple blog cards
 * 
 * Features:
 * - Responsive design with mobile-specific hiding
 * - Instructor discovery quiz functionality
 * - Blog post cards with images and descriptions
 * - Integration with external CDN for images
 * - Consistent branding and messaging
 * 
 * Structure:
 * - Instructor finder section (desktop only)
 * - Blog showcase area with multiple blog cards
 * - Responsive image loading from Cloudinary CDN
 */

import React from "react";
import "./blogsection.css";
import BlogCard from "../blogcard/BlogCard";

const BlogSection = () => {
  return (
    <div className="blog-section">
      {/* Instructor finder section - hidden on mobile devices */}
      <div className="find-instructor mobile-hide">
        <h1>Find your peleton instructor</h1>
        {/* Interactive quiz to help users find suitable instructors */}
        <button>Take quiz</button>
      </div>
      
      {/* Main blog content area */}
      <div className="peleton-blog">
        {/* Blog section header */}
        <p>Peleton Blog</p>
        <h1>Reach your goals with Peleton</h1>
        
        {/* Blog cards showcase */}
        <div className="blogs">
          {/* Blog Card 1 - Workout motivation content */}
          <BlogCard
            image="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_768/https://images.ctfassets.net/7vk8puwnesgc/7AG9vk63T88Xs69QwNGtbm/36d514723dd231a5e3ac2b83c3ff095a/Peloton-LosAngeles-2023-04-27-CedricDanny-Shot4-04519_800x490.jpg"
            title="The starting Line"
            description="How to get back into working out"
          />
          
          {/* Blog Card 2 - Getting started content */}
          <BlogCard
            image="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_256/https://images.ctfassets.net/7vk8puwnesgc/3hKBg366U2U3KHyXm0p9fx/49dcbada93dd45ee1df5af89be2851b2/SHOT_3_02006_800x490__1_.jpg"
            title="The starting Line"
            description="How to get back into working out"
          />
          
          {/* Blog Card 3 - Additional workout content */}
          <BlogCard
            image="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_768/https://images.ctfassets.net/7vk8puwnesgc/4trU163wF4CL4wmLkDMQNC/92d5dd9d561d369afd632e84339905dd/SHOT_23_08133_800x490.jpg"
            title="The starting Line"
            description="How to get back into working out"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

export default BlogSection;
