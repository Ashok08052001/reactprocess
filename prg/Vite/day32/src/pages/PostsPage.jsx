import React from "react";
import PostsList from "../components/PostsList";

export default function PostsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-3xl w-full">
        <h1 className="text-2xl font-semibold mb-4">Posts</h1>
        <PostsList />
      </div>
    </div>
  );
}
