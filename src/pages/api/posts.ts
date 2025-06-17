import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
    {
      id: 1,
      title: "Sample Post",
      content: "This is a sample post content.",
      published: true,
    },
    {
      id: 2,
      title: "Sample Post 2",
      content: "This is a sample post 2 content.",
      published: false,
    },
    {
      id: 3,
      title: "Sample Post 3",
      content: "This is a sample post 3 content.",
      published: true,
    },
    {
      id: 4,
      title: "Sample Post 4",
      content: "This is a sample post 4 content.",
      published: false,
    },
    {
      id: 5,
      title: "Sample Post 5",
      content: "This is a sample post 5 content.",
      published: true,
    },
  ]);
}
