import fs from "fs";
import path from "path";
import Link from "next/link";
import Layout from "@/components/Layout";

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("src/pages/blog/post"));

  const posts = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return {
    props: {
      posts,
    },
  };
}

export default function BlogIndex({ posts }: any) {
  return (
    <Layout>
      <h1>Daftar Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <p>{post.slug}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
