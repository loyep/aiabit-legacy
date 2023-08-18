import type { NextApiRequest, NextApiResponse } from "next";

type Response = {
  version: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>): Promise<void> {
  return res.status(200).json({ version: '0.0.0' });
}