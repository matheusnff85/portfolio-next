import { allPosts, Post } from "contentlayer/generated";
import type { GetStaticProps } from "next";
import React from "react";

export const getStaticPaths = () => {
  const paths = allPosts.map((post) => post._raw.flattenedPath);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = (context) => {
  const slug = context.params!.slug;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  return { props: { post } };
};

const PostLayout: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }}></div>
    </div>
  );
};

export default PostLayout;
