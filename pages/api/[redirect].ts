// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import redirects from '../../lib/redirects';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { redirect } = req.query;
  const path = redirects[redirect as any];
  if (!path) res.status(404).send('Not found');
  res.redirect(path);
}
