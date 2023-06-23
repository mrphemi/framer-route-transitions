import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between max-w-5xl mx-auto py-8">
      <Link href="/" className="text-xl font-bold">
        Home
      </Link>
      <ul>
        <li className="text-xl font-bold">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
