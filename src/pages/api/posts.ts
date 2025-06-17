import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
    {
      id: 1,
      title: "Sample Post",
      slug: "sample-post",
      content: "This is a sample post content.",
      published: true,
    },
    {
      id: 2,
      title: "Sample Post 2",
      slug: "sample-post-2",
      content: "This is a sample post 2 content.",
      published: false,
    },
    {
      id: 3,
      title: "Sample Post 3",
      slug: "sample-post-3",
      content: "This is a sample post 3 content.",
      published: true,
    },
    {
      id: 4,
      title: "Sample Post 4",
      slug: "sample-post-4",
      content: "This is a sample post 4 content.",
      published: false,
    },
    {
      id: 5,
      title: "Sample Post 5",
      slug: "sample-post-5",
      content: "This is a sample post 5 content.",
      published: true,
    },
    {
      id: 6,
      title: "Sample Post 6",
      slug: "sample-post-6",
      content: "This is a sample post 6 content.",
      published: false,
    },
    {
      id: 7,
      title: "Sample Post 7",
      slug: "sample-post-7",
      content: "This is a sample post 7 content.",
      published: true,
    },
    {
      id: 8,
      title: "Sample Post 8",
      slug: "sample-post-8",
      content: "This is a sample post 8 content.",
      published: false,
    },
    {
      id: 9,
      title: "Sample Post 9",
      slug: "sample-post-9",
      content: "This is a sample post 9 content.",
      published: true,
    },
    {
      id: 10,
      title: "Sample Post 10",
      slug: "sample-post-10",
      content: "This is a sample post 10 content.",
      published: false,
    },
  ]);
}
