// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import redirects from '../../lib/redirects';

/**
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default function handler(req, res) {
  const { redirect } = req.query;
  const path = redirects[redirect];
  if (!path) res.status(404).send('Not found');
  res.redirect(path);
}
