import { Link, useLoaderData } from "remix";
import { getPosts } from "~/loaders/post";
import type { Post } from "~/loaders/post";

export const loader = () => {
	return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();
  return (
    <div>
      <h1 className="text-title1 font-bold">Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}