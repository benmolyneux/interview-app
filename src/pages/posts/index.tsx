import { useEffect, useState } from "react";
import { Post } from "@/types/Post.types";
import { useRouter } from "next/router";
import { getPosts } from "./getPosts";

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
    // remove the dependency array so runs on ever render?
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          //
          <li key={post.id} onClick={() => router.push(`/posts/${post.id}`)}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: {}, // see if they move the fetchPosts to getServerSideProps?
  };
}
