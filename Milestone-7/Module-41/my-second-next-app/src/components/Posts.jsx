"use client";
import { use } from "react";

const Posts = ({ postPromise }) => {
  const posts = use(postPromise);
  console.log("Posts is post components", posts);

  return (
    <div>
      <h2 className="text-4xl">Posts: {posts.length}</h2>
    </div>
  );
};

export default Posts;
