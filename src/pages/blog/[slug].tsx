// pages/blog/[slug].tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Layout from "@/components/Layout";

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("src/pages/blog/post"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const markdownFile = fs.readFileSync(
    path.join("src/pages/blog/post", `${params.slug}.mdx`),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);
  const serializedContent = await serialize(content);

  return {
    props: {
      frontMatter,
      serializedContent,
    },
  };
}

export default function BlogDetail({ frontMatter, serializedContent }: any) {
  return (
    <Layout>
      <article className="container mx-auto my-8 px-8 prose prose-sm md:prose-base lg:prose-lg prose-slate ">
        <h1>{frontMatter.title}</h1>
        <MDXRemote {...serializedContent} />
      </article>
    </Layout>
  );
}
