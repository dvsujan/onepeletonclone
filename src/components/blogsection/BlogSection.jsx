import React from "react";
import "./blogsection.css";
import BlogCard from "../blogcard/BlogCard";

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="find-instructor">
        <h1>Find your peleton instructor</h1>
        <button>Take quiz</button>
      </div>
      <div className="peleton-blog">
        <p>Peleton Blog</p>
        <h1>Reach your goals with Peleton</h1>
        <div className="blogs">
          <BlogCard
            image="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_768/https://images.ctfassets.net/7vk8puwnesgc/7AG9vk63T88Xs69QwNGtbm/36d514723dd231a5e3ac2b83c3ff095a/Peloton-LosAngeles-2023-04-27-CedricDanny-Shot4-04519_800x490.jpg"
            title="The starting Line"
            description="How to get back into working out"
          />
          <BlogCard
            image="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_256/https://images.ctfassets.net/7vk8puwnesgc/3hKBg366U2U3KHyXm0p9fx/49dcbada93dd45ee1df5af89be2851b2/SHOT_3_02006_800x490__1_.jpg"
            title="The starting Line"
            description="How to get back into working out"
          />
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
