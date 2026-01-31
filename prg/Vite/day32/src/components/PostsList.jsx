import React from "react";
import useFetch from "../hooks/useFetch";

export default function PostsList() {
  const { data, loading, error, refetch } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  if (loading) return <div className="p-4">Loading....</div>;
  if (error)
    return (
      <div className="p-4">
        <div className="text-red-600 mb-2">Error: {error.message}</div>
        <button
          onClick={refetch}
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  if (!data || !Array.isArray(data))
    return <div className="p-4">No posts.</div>;

  const posts = data.slice(0, 10);

  return (
    <div className="p-4 space-y-4">
      {posts.map((post) => (
        <article key={post.id} className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-700">{post.body}</p>
        </article>
      ))}
    </div>
  );
}
