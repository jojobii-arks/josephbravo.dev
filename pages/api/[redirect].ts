// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import redirects from '../../lib/redirects';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { redirect } = req.query;
  if (!redirect || Array.isArray(redirect)) res.status(404).send('Not found');
  const path = redirects[redirect as string];
  if (!path) res.status(404).send('Not found');
  res.redirect(path);
}
