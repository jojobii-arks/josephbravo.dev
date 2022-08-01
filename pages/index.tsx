import type { NextPage } from 'next';
import Link from 'next/link';
import redirects from '../lib/redirects';

const links = [
  {
    name: 'GitHub',
    url: redirects.github
  },
  {
    name: 'LinkedIn',
    url: redirects.linkedin
  }
];

const Home: NextPage = () => {
  return (
    <div className="p-16">
      <div className="max-w-3xl mx-auto p-16 bg-base-100 rounded-box">
        <div className="p-4 bg-base-300 text-center rounded-box">
          <h1 className="text-4xl font-black pb-2">Joseph Bravo</h1>
          <h2 className="text-3xl">Full Stack Web Developer</h2>
        </div>
        <div className="pt-16">
          <ul className="flex flex-col gap-4 justify-center">
            {links.map(link => (
              <Link href={link.url} key={link.url}>
                <button className="btn btn-block">{link.name}</button>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
