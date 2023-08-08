import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-4 px-0">
      <div className="container mx-auto px-8 flex justify-start gap-4 items-center">
        <Link href="/">
          <p className="text-primary text-md font-semibold">Home</p>
        </Link>
        <Link href="/blog">
          <p className="text-primary text-md font-semibold">Blog</p>
        </Link>
        <Link href="/about">
          <p className="text-primary text-md font-semibold">About</p>
        </Link>
      </div>
    </nav>
  );
}
