import { Post } from "@/types/Post.types";

export const getPosts = async (): Promise<Post[]> => {
  console.log("Fetching posts from API...");
  const response = await fetch("/api/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};
